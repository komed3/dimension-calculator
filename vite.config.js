import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig( () => ( {
  base: '/dimension-calculator/',
  plugins: [ react(), tailwindcss() ],
  resolve: { alias: { '@': resolve( __dirname, '.' ) } },
  build: { rollupOptions: { output: { manualChunks ( id ) {
    if ( id.includes( 'node_modules' ) ) {
      if ( id.includes( 'lucide' ) ) return 'icons';
      if ( id.includes( 'react' ) ) return 'react';
      return 'vendor';
    }
  } } } }
} ) );
