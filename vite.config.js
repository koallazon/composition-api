import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      emitWarning: false,
      emitError: false,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
  ],
  server: {
    open: true,
    port: 8080,
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'terser',
  },
})
