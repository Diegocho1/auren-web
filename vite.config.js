import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
    strictPort: true, // falla si el puerto está ocupado, no busca otro
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
//El alias @ permite importar desde la raíz de src/ en cualquier parte del proyecto sin rutas relativas largas.