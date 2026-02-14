import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'server',
    adapter: cloudflare(),
    integrations: [react(), keystatic()],

    // Твоё решение проблемы с картинками и sharp
    image: {
        service: passthroughImageService()
    },

    vite: {
        // Твоё решение для исключения sharp из бандла
        build: {
            rollupOptions: {
                external: ['sharp']
            }
        },
        // Наше решение для исправления ошибки "fields.string is not a function"
        ssr: {
            noExternal: ['@keystatic/core', '@keystatic/astro', 'emery', '@keystar/ui', 'yjs', 'y-protocols'],
        },
        optimizeDeps: {
            exclude: ['yjs'] // Чтобы не было конфликта версий редактора
        }
    },
});