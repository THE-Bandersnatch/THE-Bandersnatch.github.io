import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Required for GitHub Pages paths
  plugins: [react()],
  build: {
    outDir: 'docs', // Build to /docs folder
    assetsDir: 'assets', // Assets in /docs/assets
    rollupOptions: {
      // Remove the external line - not needed with proper React setup
      // External dependencies should be handled automatically
    }
  }
});