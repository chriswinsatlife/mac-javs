import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(process.cwd(), './components')
      }
    },
    build: {
      rollupOptions: {
        external: ['react', '@headlessui/react', 'react-dom'],
        output: {
          manualChunks: undefined
        }
      },
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    server: {
      fs: {
        strict: false,
        allow: ['.']
      }
    }
  }
});
