# rbitcoin website

A static website for [rbitcoin](https://github.com/reardencode/rbitcoin), with Home, Get started, Architecture, Wallet backends, Security, and About pages.

## Local preview

No installation or build step is required:

```sh
python3 -m http.server 8784 --bind 127.0.0.1
```

Open http://127.0.0.1:8784/. The pages also work directly from `index.html`.

The site follows the system theme until a visitor chooses light or dark mode. Local scripts add command and address copying, donation QR controls, an archive comparison, and stable-release information. Content and navigation remain available without JavaScript.

## Editing

Each page is a directory with an `index.html` file. Shared styles and scripts live in `assets/`. Donation QR images contain the exact addresses displayed alongside them; regenerate and verify the QR image whenever an address changes.

The upstream website repository uses this same site tree inside `public/`:
[reardencode/rbitcoin.org](https://github.com/reardencode/rbitcoin.org).

## License

MIT OR Apache-2.0. See [NOTICE.txt](NOTICE.txt), [LICENSE-MIT.txt](LICENSE-MIT.txt), and [LICENSE-APACHE.txt](LICENSE-APACHE.txt).
