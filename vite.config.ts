import { defineConfig } from 'vite';
import { resolve } from 'path';
import uni from '@uni-helper/plugin-uni';
import UniPages from '@uni-helper/vite-plugin-uni-pages';
import { useUniPages } from './src/composables';
import UniKuRoot from '@uni-ku/root';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [UniPages(useUniPages), UniKuRoot(), uni()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
});
