import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/blog': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
});