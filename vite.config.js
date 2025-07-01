import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Ticket-resell/',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  }
});
