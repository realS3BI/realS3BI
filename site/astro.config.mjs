import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://schlossers.at',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
