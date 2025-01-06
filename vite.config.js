import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expone el servidor a la red
    port: 5173, // Cambia este número en el segundo proyecto (ej: 3000)
  }
})
