import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  experience,
};
