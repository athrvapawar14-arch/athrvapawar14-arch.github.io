import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://athrvapawar.me',

  vite: {
    plugins: [tailwindcss()]
  }
});