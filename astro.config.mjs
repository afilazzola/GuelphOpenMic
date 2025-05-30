import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://amplifymusic.ca",
  integrations: [tailwind(), mdx(), sitemap(), preact()],
});
