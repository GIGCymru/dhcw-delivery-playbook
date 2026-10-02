#!/usr/bin/env node
// Serves the built site/ and audits every page in its sitemap against WCAG 2.2 AA with axe-core.
// Usage: zensical build --clean && npm run a11y
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const { default: AxeBuilder } = require("@axe-core/playwright");
const httpServer = require("http-server");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 8080);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];
// Tall enough to show the whole sidebar; a scrolled sidebar leaves clipped items axe cannot resolve.
const VIEWPORT = { width: 1440, height: 2400 };
const CONSENT_BANNER = "[data-md-component=consent] .md-consent__inner";
const CONSENT_ACCEPT = `${CONSENT_BANNER} .md-button--primary`;

// Zensical injects this empty full-height fixed div on every page. It is not authored here, and
// it makes axe unable to resolve backgrounds, so contrast checks come back "needs review".
const removeThemeOverlay = () =>
  document
    .querySelectorAll('body > div[style*="position: fixed"][style*="z-index: 4"]')
    .forEach((el) => el.remove());

function sitemapPaths() {
  const siteUrl = fs.readFileSync(path.join(ROOT, "mkdocs.yml"), "utf8").match(/^site_url:\s*(\S+)/m)[1];
  const basePath = new URL(siteUrl).pathname;
  const xml = fs.readFileSync(path.join(ROOT, "site", "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => {
    const { pathname } = new URL(loc);
    return "/" + pathname.slice(basePath.length);
  });
}

// The theme's drawer overlay is a <label> with an aria-label (aria-prohibited-attr). Not authored here.
const THEME_EXCLUDED = [".md-overlay"];

// "Needs review" results checked by hand. Keep this list short: anything else fails the build.
const REVIEWED = [
  {
    id: "color-contrast",
    selector: ".md-consent__form > p",
    // Text sits on a 70% white overlay, so even over black page text the background is #b3b3b3: 6.9:1 with #212b32.
    reason: "consent banner text over translucent overlay",
  },
];
const isReviewed = (issue, node) =>
  issue.type === "needs review" &&
  REVIEWED.some((r) => r.id === issue.id && r.selector === node.target.join(" "));

async function audit(page, include) {
  const builder = new AxeBuilder({ page }).withTags(WCAG_TAGS);
  if (include) builder.include(include);
  else THEME_EXCLUDED.forEach((selector) => builder.exclude(selector));
  const { violations, incomplete } = await builder.analyze();
  return [
    ...violations.map((issue) => ({ ...issue, type: "violation" })),
    ...incomplete.map((issue) => ({ ...issue, type: "needs review" })),
  ];
}

async function main() {
  if (!fs.existsSync(path.join(ROOT, "site", "sitemap.xml"))) {
    console.error("site/ not built. Run: zensical build --clean");
    process.exit(1);
  }

  const server = httpServer.createServer({ root: path.join(ROOT, "site"), cache: -1 });
  await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
  const browser = await chromium.launch();
  const failures = [];

  try {
    const paths = sitemapPaths();

    for (const [index, pagePath] of paths.entries()) {
      const url = BASE_URL + pagePath;
      // A fresh context per page, so no stored consent hides the banner.
      const context = await browser.newContext({ viewport: VIEWPORT });
      const page = await context.newPage();
      await page.goto(url, { waitUntil: "networkidle" });

      // The banner is shown on first visit; audit it once, then dismiss it so it cannot cover the page.
      await page.waitForSelector(CONSENT_BANNER, { state: "visible" });
      const results = [];
      if (index === 0) results.push(await audit(page, CONSENT_BANNER));
      await page.click(CONSENT_ACCEPT);
      await page.waitForSelector(CONSENT_BANNER, { state: "hidden" });

      await page.evaluate(removeThemeOverlay);
      results.push(await audit(page));

      for (const issue of results.flat()) {
        for (const node of issue.nodes) {
          if (isReviewed(issue, node)) continue;
          failures.push({ url, type: issue.type, id: issue.id, selector: node.target.join(" "), help: issue.help });
        }
      }
      await context.close();
    }

    if (failures.length) {
      console.error(`Accessibility check failed with ${failures.length} issue(s).`);
      for (const f of failures.slice(0, 100)) {
        console.error(`- [${f.type}] [${f.id}] ${f.url} :: ${f.selector} (${f.help})`);
      }
      process.exitCode = 1;
      return;
    }
    console.log(`Accessibility checks passed for ${paths.length} page(s).`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
