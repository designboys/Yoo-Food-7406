import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Preserve GIF files without optimization
          if (assetInfo.name && assetInfo.name.endsWith('.gif')) {
            return 'assets/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
  assetsInclude: ['**/*.gif'], // Ensure GIFs are included as assets
  optimizeDeps: {
    exclude: ['**/*.gif'] // Don't optimize GIF files
  }
});