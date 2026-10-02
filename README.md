# DHCW Delivery Playbook

The source for the DHCW Product and Service Delivery Playbook, published as a website. This is not yet approved and is in draft for comment and collaboration.

The content lives as Markdown in `docs/`. The site is built with [Zensical](https://zensical.org) — the actively maintained successor to Material for MkDocs from the same team — and published to GitHub Pages automatically on every push to `main`.

## Read it online

Once published, the site is at `https://gigcymru.github.io/dhcw-delivery-playbook/`.

## Run it locally

You need Python 3.10 or newer.

```bash
pip install -r requirements.txt
python -m zensical serve
```

(Or `zensical serve` if installed to your `PATH`.) This starts the Zensical development server.

Then open `http://localhost:8000`. The development server rebuilds the site as you edit any file in `docs/`. To produce the static site without running the server, run `python -m zensical build --strict --clean` (output goes to `site/`).

## Make a change

1. Edit or add a Markdown file in `docs/`.
2. If you add a new page, list it in the `nav:` section of `mkdocs.yml`.
3. Commit and push to `main`. The site rebuilds and republishes within a minute or two.

Every page on the site has an "Edit this page" pencil that takes you straight to the right file on GitHub, so small fixes can be made in the browser.

## A note on tooling

This site is built with [Zensical](https://zensical.org), the actively developed successor to Material for MkDocs from the same team. Zensical reads this `mkdocs.yml` natively — the same config and Markdown that Material for MkDocs used — so the theme, navigation, and brand styling render the same way.

The brand is driven by design tokens in `docs/stylesheets/_tokens.css` (sourced from the DHCW/NHS Wales design system and the NHS Wales component library), which `docs/stylesheets/extra.css` consumes. Adjust a colour or size once in `_tokens.css` and it flows through the whole site.

## Accessibility

The site targets WCAG 2.2 AA. Every pull request and every push runs an automated accessibility check in CI ([axe-core](https://github.com/dequelabs/axe-core) driven by Playwright, in `scripts/check-accessibility.js`); the build fails on any violation or unreviewed "needs review" result, and the site only deploys when the check passes.

The brand tokens in `docs/stylesheets/_tokens.css` are chosen to meet AA contrast (body text and links at least 4.5:1, large text and UI at least 3:1), the keyboard focus indicator uses the NHS high-visibility yellow, there is a visible skip link, and motion respects `prefers-reduced-motion`.

To run the check locally you need Node.js, then:

```bash
npm ci
npx playwright install chromium
zensical build --clean
npm run a11y
```

The script serves `site/` and audits every page in the sitemap, plus the consent banner. It removes the theme's stray full-height overlay element first, because that element stops axe working out background colours. The few results checked by hand are listed in `scripts/check-accessibility.js`. Set `PORT` to use a port other than 8080.

## Analytics

The site uses [Simple Analytics](https://www.simpleanalytics.com/), which is cookieless. It is on by default and visitors can opt out from the banner or the "Change analytics settings" footer link. The banner text is in `extra.consent` in `mkdocs.yml`, and the loader is the template override in `overrides/partials/integrations/analytics/simple.html`.

## Contributing

This is a living document. Raise an issue or open a pull request. Contributions via your Delivery Manager are welcome.

---

Digital Health and Care Wales &bull; Iechyd a Gofal Digidol Cymru
