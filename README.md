# rbitcoin — Essential

The standalone Essential website: homepage, Get started, Architecture, Wallet backends, Security, and About.

## Open the website

Open `index.html` in your browser. All six pages, local links, section anchors, and styles work directly from the folder. Internet access is only needed for external project links.

No installation, build step, external fonts, or hosting account is required. A small local script powers the theme switcher; the full site remains readable without JavaScript.

For a local web server, open a terminal in this folder and run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open http://localhost:8000. Stop the server with Control-C.

## Light and dark mode

Use the sun / moon Light / Dark button in the footer on any page. Before a manual choice, the theme follows the appearance preference reported by your browser or operating system. The site initially follows your system appearance, then remembers your explicit choice in browser storage. The control supports keyboard use and touch. If storage is blocked, switching still works for the current page. For consistent saved preferences across pages, use the local server; browser handling of storage for directly opened files varies. Printing always uses light colors and hides the control.

## Edit

- `index.html` — homepage.
- `get-started/`, `architecture/`, `wallets/`, `security/`, `about/` — reading pages, each with its own `index.html`.
- `assets/site.css` — Essential typography, light/dark palettes, responsive layout, and print styles.
- `assets/theme.js` — system theme detection, switching, and saved preference.
- `assets/wordmark-light.svg` — supplied Logo-1.svg for light mode, with accent #C3502A.
- `assets/wordmark-dark.svg` — supplied Logo.svg for dark mode, with accent #EC7F5B.
- `NOTICE.txt` — original copyright and license notice.

The supplied Essential HTML and CSS are the source of this version. Other design directions, comparison links, and the comparison footer have been removed. The document content and Essential reading layouts are preserved. Page titles no longer carry a design-variant label, and the original hosted comparison site's canonical URLs have been removed.

The pages retain the original `noindex,nofollow` setting for local review. Set the intended indexing policy and canonical domain before publishing this folder as a public website.

Content was reviewed on 19 September 2026 in the supplied source; this package does not refresh technical claims. Refer to the linked official documentation for current operational guidance.
