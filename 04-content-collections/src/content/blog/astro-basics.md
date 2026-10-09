---
title: 'Astro basics'
pubDate: 2026-09-18
description: 'Componenten, props en de frontmatter van een .astro-bestand'
readingTime: 5
draft: false
featured: false
color: highlight
level: 10
image: ../../assets/images/blog/vliegtuig.jpg
imageAlt: Een passagier in een donker vliegtuig kijkt door het raampje naar een roze wolkendek
---

Een `.astro`-bestand bestaat uit twee delen: een **component script** tussen de `---`,
en de **template** eronder.

## Props

Met `Astro.props` haal je de waarden op die een component meekrijgt, bv.
`const { title } = Astro.props;`.
