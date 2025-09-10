import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['despliegue-b88b.onrender.com'], // <-- agrega esto
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // URL de tu backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescribir la ruta si es necesario
      },
    },
  },
});
