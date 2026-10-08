# Demo: content collections

Demo bij de slides van hoofdstuk 03, sectie "Content collections". Een mini-blog waarin
elke post een markdown-bestand is.

```bash
npm install
npm run dev
```

## Wat zit waar?

| Slide | Bestand |
| --- | --- |
| Mappenstructuur | `src/content/blog/*.md`, `src/content.config.js` |
| Collection of gewoon een JS-bestand? | `src/data/site.js` (navigatie, sitetitel) |
| `content.config.js`, `glob()`, schema met Zod | `src/content.config.js` |
| Een entry schrijven, YAML | `src/content/blog/mijn-eerste-post.md` |
| `getCollection()` + `.map()` | `src/pages/index.astro` ("Uitgelicht") |
| Kijk zelf wat erin zit | `src/pages/debug.astro` (`/debug/`) |
| Van entries naar componenten | `src/pages/index.astro` → `src/components/PostCard.astro` |
| Filteren en sorteren | `src/pages/index.astro` (drafts eruit, nieuwste eerst) |
| `image()` + `<Image />` | `src/content.config.js`, `PostCard.astro` |
| `render()` + `.c-prose` | `src/pages/blog/mijn-eerste-post.astro`, `src/styles/components/_prose.scss` |
| Modifier uit je content: `z.enum` | `color` → `c-post-card--accent` / `--highlight` |
| Waarde uit je content in je CSS | `level` → ``style={`--level: ${level}%`}`` → `_post-card.scss` |
| Eén pagina per entry? | `src/pages/blog/mijn-eerste-post.astro` |

## Live te demonstreren

- **Nieuwe post toevoegen**: kopieer een `.md`-bestand in `src/content/blog/`, pas de
  frontmatter aan. Verschijnt meteen op de homepage, zonder code aan te passen.
- **Schemafout**: zet in `mijn-eerste-post.md` `readingTime: "3 min"`. Astro stopt met
  `[InvalidContentEntryDataError] blog → mijn-eerste-post data does not match collection schema.`
- **Enum**: zet `color: blue`. Ook een foutmelding: enkel `accent` en `highlight` mogen.
- **Verkeerd beeldpad**: verander `image:` in een pad dat niet bestaat. De build stopt,
  in plaats van een kapot beeld te tonen.
- **Draft**: `content-renderen.md` staat op `draft: true` en ontbreekt op de homepage,
  maar staat wel in `/debug/` (daar wordt niet gefilterd). Zet hem op `false`.
- **Volgorde**: haal de `.sort()` weg in `index.astro`: een collection heeft geen vaste
  volgorde.
- **404**: enkel "Mijn eerste post" heeft een eigen pagina. De andere links geven een
  404, tot we volgende les `src/pages/blog/[id].astro` met `getStaticPaths()` maken.

Foto's: zie `src/assets/images/blog/CREDITS.md`.
