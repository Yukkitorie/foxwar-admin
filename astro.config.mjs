// @ts-check
import { defineConfig } from 'astro/config';

import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [keystatic(), react()],
  adapter: cloudflare()
});