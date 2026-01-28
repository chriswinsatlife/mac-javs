import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(process.cwd(), './components')
      }
    }
  }
});
