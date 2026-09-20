# Josh G. Nangpuhan — Portfolio

Personal portfolio of Josh G. Nangpuhan, BSIT graduate from Ifugao State
University. A warm paper folio: ruled sections, one green ink, no templates.

## Stack

- React 19 + Vite
- Plain CSS (no UI framework)
- Lucide icons (`lucide-react`)

## Develop

```sh
npm install
npm run dev
```

## Build & preview

```sh
npm run build
npm run preview
```

`npm run lint` runs the linter.

## Themes

Three switchable inks — **Paper** (warm light), **Fog** (cool light), and
**Ink** (dark, the default). The choice persists in `localStorage`.

## Deploy (Netlify)

Build command: `npm run build` · Publish directory: `dist`.
Both are set in `netlify.toml`, so importing the repo in Netlify just works.
No environment variables or redirect rules needed.
