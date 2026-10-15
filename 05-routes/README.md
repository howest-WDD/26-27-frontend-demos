# Demo: Astro routes

Demo bij de slides "Astro routes". Dezelfde mini-blog als in de demo
`04-content-collections`, maar nu als site met meerdere pagina's: een menu, een
overzichtspagina, een detailpagina per post (uit één bestand) en een eigen 404-pagina.

```bash
npm install
npm run dev
```

## Wat zit waar?

| Slide | Bestand |
| --- | --- |
| File-based routing | `src/pages/`: `index.astro` → `/`, `over.astro` → `/over/`, `blog/index.astro` → `/blog/` |
| Navigeren tussen pagina's | absolute links met `/` op het einde, bv. `href="/blog/"` |
| Navigatie op één plaats | `src/data/site.js` (`navigation`) → `src/components/Header.astro` (actieve link + `aria-current`) |
| De opbouw van een volwaardige site | `src/pages/` |
| Dynamische routes: `[id].astro` | `src/pages/blog/[id].astro` |
| `getStaticPaths()` met een collection, `params` en `props` | `src/pages/blog/[id].astro` |
| De detailpagina afwerken: `render()`, `.c-content` | `src/pages/blog/[id].astro`, `src/styles/components/_content.scss` |
| Linken naar de detailpagina's | `src/pages/blog/index.astro`, `src/pages/index.astro` |
| `getStaticPaths()` staat op zichzelf (drafts filteren) | `src/pages/blog/[id].astro` |
| Extra: vorige en volgende post | `src/pages/blog/[id].astro` (`previous`/`next` in `props`), `_post-nav.scss` |
| Een eigen 404-pagina | `src/pages/404.astro` |

## Live te demonstreren

- **Nieuwe post**: kopieer een `.md`-bestand in `src/content/blog/`. De kaart op `/blog/`
  én de detailpagina verschijnen, zonder code aan te passen.
- **Nieuwe pagina**: maak `src/pages/contact.astro` en zet een regel bij `navigation` in
  `site.js`. Klik ze aan: de link in het menu wordt actief.
- **Build-output**: `npm run build` en kijk in `dist/blog/`: één map met een
  `index.html` per post, allemaal uit `[id].astro`.
- **Draft**: `content-renderen.md` staat op `draft: true`: geen kaart én geen pagina
  (`/blog/content-renderen/` geeft de 404). Haal de filter weg in `getStaticPaths()`:
  nu bestaat de pagina wel, al linkt niemand ernaar.
- **`getStaticPaths()` vergeten**: zet `export async function getStaticPaths()` in
  commentaar. Astro stopt met `GetStaticPathsRequired`.
- **Sleutel klopt niet**: hernoem `params: { id: ... }` naar `params: { slug: ... }`.
  De sleutel moet de naam tussen de haken zijn.
- **Typfout in een link**: verander `` `/blog/${post.id}/` `` in `` `/blogs/${post.id}/` ``
  in `blog/index.astro`. Geen foutmelding, wel de 404-pagina bij het klikken.
- **Route-prioriteit**: maak `src/pages/blog/archief.astro`. `/blog/archief/` toont die
  vaste pagina, niet `[id].astro`.
- **Actieve link op een detailpagina**: op `/blog/zod-schemas/` is "Blog" niet actief,
  want `/blog/zod-schemas/` is niet gelijk aan `/blog/`. Hoe los je dat op?
  (`currentPath.startsWith(item.href)`, maar dan niet voor `/`: anders is Home altijd
  actief.)

Foto's: zie `src/assets/images/blog/CREDITS.md`.
