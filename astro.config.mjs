import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { remarkObsidianImages } from './src/plugins/remarkObsidianImages';

export default defineConfig({
  site: 'https://athrvapawar.me',

  markdown: {
    processor: satteri({
      mdastPlugins: [remarkObsidianImages]
    })
  },

  vite: {
    plugins: [tailwindcss()]
  }
});