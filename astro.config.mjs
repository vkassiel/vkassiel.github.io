import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// GitHub Pages: for a user site (vkassiel.github.io) keep base '/'.
// For a project site (vkassiel.github.io/<repo>) set base: '/<repo>'.
export default defineConfig({
  site: 'https://vkassiel.github.io',
  base: '/',
  integrations: [tailwind()],
})
