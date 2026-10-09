import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // elk .md-bestand in src/content/blog wordt één entry, met de bestandsnaam als id
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  // schema als functie, zodat we image() kunnen gebruiken
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string().optional(),
      readingTime: z.number(),
      draft: z.boolean(),
      featured: z.boolean(),
      // enkel waarden die als modifier bestaan in _post-card.scss
      color: z.enum(['accent', 'highlight']),
      // 0-100, wordt de breedte van de balk via een CSS custom property
      level: z.number(),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { blog };
