---
title: 'Mijn eerste post'
pubDate: 2026-09-25
description: 'Een korte intro over content collections'
readingTime: 3
draft: false
featured: true
color: accent
level: 20
image: ../../assets/images/blog/station.jpg
imageAlt: Een leeg perron bij schemering, met sporen die in de verte verdwijnen
---

Dit is de inhoud van mijn blogpost, gewoon in **markdown**.

## Waarom een collection?

Elke post is een apart markdown-bestand met **dezelfde frontmatter-structuur**. Astro
leest al die bestanden in tijdens het bouwen, controleert ze met een schema, en geeft
ze terug via één functie: `getCollection('blog')`.

- Een nieuwe post toevoegen = een nieuw `.md`-bestand
- Geen enkele lijn code aanpassen
- Een typfout in de frontmatter? Dan stopt de build met een duidelijke foutmelding

## En deze tekst?

Alles onder de frontmatter is de *body*. Die toon je met `render()` en de
`<Content />`-component, zoals op deze pagina.
