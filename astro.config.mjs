// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

export default defineConfig({
  server: {
    port: 4322,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), icon()]
});
