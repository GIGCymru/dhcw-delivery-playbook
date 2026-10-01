#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const resultsPath = process.argv[2] || "pa11y-results.json";
const report = JSON.parse(fs.readFileSync(resultsPath, "utf8"));
const findings = Object.entries(report.results || {}).flatMap(([url, issues]) =>
  (issues || []).map((issue) => ({ url, ...issue }))
);

// Zensical/Material injects this stock search overlay at runtime on every page.
// It is not authored in this repo, so keep the check strict everywhere else.
const THEME_SEARCH_OVERLAY_SELECTOR_PATTERN = /^html > body > div(:nth-child\(\d+\))?$/;
const THEME_SEARCH_OVERLAY_CONTEXT = '<div style="position: fixed; height: 100%; top: 0px; z-index: 4;"></div>';

const actionable = findings.filter((issue) =>
  !(
    (issue.code === "color-contrast" && issue.runnerExtras?.needsFurtherReview === true) ||
    (
      THEME_SEARCH_OVERLAY_SELECTOR_PATTERN.test(issue.selector) &&
      issue.context === THEME_SEARCH_OVERLAY_CONTEXT &&
      ["aria-required-attr", "button-name", "scrollable-region-focusable"].includes(issue.code)
    )
  )
);

const MAX_ISSUES_TO_DISPLAY = 100;
if (actionable.length) {
  console.error(`Accessibility check failed with ${actionable.length} actionable issue(s).`);
  for (const issue of actionable.slice(0, MAX_ISSUES_TO_DISPLAY)) {
    console.error(`- [${issue.code}] ${issue.url} :: ${issue.selector}`);
  }
  process.exit(1);
}

const filtered = findings.length - actionable.length;
console.log(`Accessibility checks passed (${filtered} review-only finding(s) ignored, including known stock-theme search overlay issues).`);
