import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://schlossers.at',
  trailingSlash: 'never',
  build: { format: 'file' },
});
