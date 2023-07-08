import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/new': {
        target: 'https://autumnfish.cn/api/joke/list?num=10&pag',
        changeOrigin: true,
      }
    }
  }
})
