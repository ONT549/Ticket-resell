import { defineConfig } from 'vite';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  },
  buildEnd() {
    try {
      copyFileSync('public/CNAME', 'dist/CNAME');
      console.log('✅ CNAME copied to dist/');
    } catch (e) {
      console.warn('⚠️ CNAME copy failed:', e.message);
    }
  }
});
