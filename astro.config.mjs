import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://improve-growth.pages.dev/',
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()]
});
