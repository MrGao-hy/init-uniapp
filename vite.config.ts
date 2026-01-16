import { defineConfig } from 'vite';
import { resolve } from 'path';
import uni from '@uni-helper/plugin-uni';
import UniPages from '@uni-helper/vite-plugin-uni-pages';
import { useUniPages } from './src/composables'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UniPages(useUniPages), uni()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});

