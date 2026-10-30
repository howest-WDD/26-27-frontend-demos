# Demo: adaptive, dezelfde vraag met twee prompts

Demo bij de slide "Demo: dezelfde vraag, twee prompts" (slides "Adaptive"). Het
startpunt is de mini-blog uit de demo `05-routes`: een header met vier links uit
`src/data/site.js`, BEMIT/ITCSS en de mixin `mq-from(md)`. Een mobiel menu is er nog
niet: op een smal scherm staan de links gewoon onder het logo.

Je geeft Claude twee keer dezelfde opdracht: één keer zonder begrippen, één keer met
de begrippen uit de slides. Daarna vergelijk je de twee resultaten.

```bash
npm install
npm run dev
```

## Prompt A: zonder begrippen

> *"Maak de navigatie responsive voor mobiel."*

## Prompt B: met begrippen

> *"Maak voor @src/components/Header.astro een mobiel menu met een `<dialog>`, geopend
> en gesloten met invoker commands (`commandfor` + `command="show-modal"` /
> `command="close"`), zonder eigen script. De links komen uit `navigation` in
> @src/data/site.js, met dezelfde `.map()` als de desktopnavigatie, niet gekopieerd.
> Mobile-first: onder `md` enkel de hamburgerknop, vanaf `mq-from(md)` enkel de links
> in de header. Volg onze CLAUDE.md."*

Dit project heeft enkel de breakpoint `md` (in de Journey-oefening is dat `lg`).

## Vergelijken (op 390px, device toolbar)

| | A | B |
| --- | --- | --- |
| Opent het menu? Sluit `Esc` het? | | |
| Blijft `Tab` in het menu, of kan je naar de pagina erachter? | | |
| Scrolt de pagina erachter nog mee? | | |
| Een `<script>`, een checkbox of een `<dialog>`? | | |
| `max-width` of `mq-from`? | | |
| Hoeveel code? (`git diff --stat`) | | |

Komt prompt A toevallig ook goed uit? Bespreek dan: was het toeval of gestuurd, en hoe
weet je zonder de begrippen dat het goed is?
