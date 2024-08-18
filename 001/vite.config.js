import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
    base: './dist',
    //carga todos los archivos que tengan la extensión vue
    plugins: [
        vue({ template: { transformAssetUrls } }),
        quasar({
            sassVariables: 'src/quasar-variables.sass'
        })

    ],
    build: {
        outDir: 'dist',
        assetsDir: './assets',
        emptyOutDir: false
    },
    server: {
        watch: {
            usePolling: true,
        }
    },
    resolve: {
        alias: {
            //carga todas las rutas dinámicamente dentro de una carpeta en espsecifico
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
