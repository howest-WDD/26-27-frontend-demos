# CLAUDE.md

Dit is een Astro-project. Het gebruikt BEM en ITCSS voor alle CSS, opgebouwd met
SCSS-partials.

## Bestanden

- Alle SCSS staat in `src/styles/`, per ITCSS-laag een eigen map: `settings/`,
  `tools/`, `generic/`, `elements/`, `objects/`, `components/`, `utilities/`.
- `src/styles/main.scss` is de entry file en laadt de lagen in ITCSS-volgorde met
  `@use` (Settings en Tools uitgezonderd, zie hieronder).
- `main.scss` wordt één keer geïmporteerd, in `src/layouts/BaseLayout.astro`
  (`import '../styles/main.scss';`), niet via een `<link>` en niet in andere
  componenten of pagina's. Astro compileert de SCSS via de `sass`-dependency.
- Een partial-bestand start met een underscore (bv. `_site-header.scss`) en krijgt de
  naam van het component/object; in de `@use`-regel laat je de underscore en de
  extensie weg.
- Splits op per component/object: één file per component, niet één groot bestand per
  laag.
- Nieuwe stijlen komen in de juiste laag/map, nooit zomaar in een bestaande partial die
  er niet bij past.

## Content collections

- De collections staan in `src/content.config.js`, niet in `content.config.ts`: in dit
  project schrijven we geen TypeScript.
- Importeer `z` uit `astro/zod`, niet uit `astro:content` (deprecated).
- Componenten krijgen `entry.data` als props (`{...post.data}`), niet de hele entry.
- Eenmalige gegevens (navigatie, sitetitel) staan in `src/data/site.js`, niet in een
  collection.

## Astro-componenten

- De class-namen staan in de `.astro`-componenten in `src/components/`, `src/layouts/`
  en `src/pages/`.
- Geen `<style>`-blokken in `.astro`-bestanden (ook al ondersteunt Astro die) en geen
  `style="..."`-attributen: alle stijlen staan in de partials. Eén uitzondering: een
  CSS custom property die een waarde uit de content doorgeeft aan de partial, bv.
  `style={`--level: ${level}%`}` met `width: var(--level)` in de SCSS. Geen andere
  eigenschappen in `style`.
- Een `id` mag in de HTML blijven staan als de HTML het nodig heeft (bv. voor
  `<label for="...">`), maar wordt nooit als CSS-selector gebruikt.
- Een modifier die van een prop afhangt zet je met `class:list`, base class eerst:
  `class:list={['c-post-card', { 'c-post-card--reverse': reverse }]}`.

## Settings en Tools

- **Settings** (`settings/_variables.scss`): SCSS-variabelen met designkeuzes (kleuren,
  spacing, typografie, randen, afmetingen).
- **Tools** (`tools/_mixins.scss`): herbruikbare mixins, bv. `mq-from(md)` voor media queries.
- Deze twee lagen laad je **niet** in `main.scss`: enkel de partial die ze nodig heeft
  `@use`'t ze rechtstreeks, met een relatief pad en een alias:

  ```scss
  @use "../settings/variables" as v;

  .c-site-header {
    background: v.$color-surface;
  }
  ```

## BEM

- Block: `.block`, element: `.block__element`, modifier: `.block--modifier` of
  `.block__element--modifier`. Alles in kebab-case.
- Classnamen zijn altijd in het Engels: `.post-card__title`, niet
  `.berichtkaart__titel`. Dit is een vaste regel, geen kwestie van voorkeur of
  consistentie. (Data, zoals de tekst van de blogposts, mag wel in het Nederlands.)
- Een modifier staat in de HTML altijd samen met de base class, base eerst:
  `class="c-button c-button--large"`.
- In de CSS staat de base-regel vóór de modifier-regel.

## ITCSS-prefixes

- Objects krijgen de `o-`-prefix (bv. `.o-container`), Components de `c-`-prefix (bv.
  `.c-site-header`), Utilities de `u-`-prefix (bv. `.u-visually-hidden`).
- Elements en Generic stylen enkel pure HTML-elementen, zonder classes.

## Specificiteit

- Geen id-selectors.
- Geen geneste selectors in components: gebruik `.c-post-card__title`, niet
  `.c-post-card h3`. Enige uitzondering: `.c-prose` (`components/_prose.scss`), de wrapper rond Markdown-inhoud (`<Content />`), want die HTML heeft geen classes.
- `!important` enkel in Utilities.
- Specificiteit stijgt enkel geleidelijk doorheen de lagen, van generiek naar
  specifiek.

## Designwaarden

- Elke designwaarde (kleur, spacing, font-family, font-size, line-height, letter-spacing,
  border-radius, max-width, ...) staat als SCSS-variabele in `settings/_variables.scss`
  en wordt via de `v.`-alias gebruikt, nooit als losse waarde in een partial.
- Gebruik een bestaande variabele voor je een nieuwe aanmaakt. Twee waarden die er
  bijna hetzelfde uitzien (of dezelfde kleur in een andere notatie, bv. `rgb()` en hex)
  worden één variabele.
