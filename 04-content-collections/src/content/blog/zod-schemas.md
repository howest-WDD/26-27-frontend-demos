---
title: 'Schema met Zod'
pubDate: 2026-10-02
description: 'Hoe Astro je frontmatter controleert'
readingTime: 4
draft: false
featured: true
color: highlight
level: 60
image: ../../assets/images/blog/bos.jpg
imageAlt: Een donker bos bij schemering, met hoge bomen tegen een paarsblauwe lucht
---

Met `z.string()`, `z.number()`, `z.boolean()` en `z.coerce.date()` geef je elk veld een
verwacht type. Met `.optional()` mag een veld ontbreken.

Importeer `z` uit `astro/zod`, niet meer uit `astro:content`.
