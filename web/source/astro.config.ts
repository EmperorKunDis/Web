// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    output: "static",
    base: "/",
    image: {
        remotePatterns: [{protocol: "https"}]
    },
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'https://app.praut.cz/',
                    changeOrigin: true,
                    secure: true,
                }
            }
        },
        plugins: [
            tailwindcss()
        ]
    }
});
