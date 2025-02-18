import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,  
    allowedHosts: [
      '9b8f-103-157-153-113.ngrok-free.app',
      'localhost', 
      '.ngrok.io' ,
     'http://192.168.154.4:5173/'
    ],
    base: './',
  },
})

