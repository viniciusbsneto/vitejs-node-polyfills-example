import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import shimReactPdf from 'vite-plugin-shim-react-pdf';
import env from 'vite-plugin-env-compatible';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import react from '@vitejs/plugin-react';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

export default defineConfig(({ command, mode }) => ({
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      plugins: [nodePolyfills()],
      external: ['jss-plugin-{}'],
    },
  },
  plugins: [
    tsconfigPaths(),
    env(),
    shimReactPdf(),
    svgr(),
    react(),
    VitePluginHtmlEnv({ VITE_HTML_BUILD_TYPE: command, VITE_HTML_MODE: mode }),
  ],
}));
