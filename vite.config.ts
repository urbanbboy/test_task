import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, 'src/app'),
            "@pages": path.resolve(__dirname, 'src/pages'),
            "@widgets": path.resolve(__dirname, 'src/widgets'),
            "@entities": path.resolve(__dirname, 'src/entities'),
            "@features": path.resolve(__dirname, 'src/features'),
            "@shared": path.resolve(__dirname, 'src/shared'),
        }
    },
    server: {
        watch: {
            usePolling: true
        },
        host: true,
        port: 3000
    },
    preview: {
        port: 3001
    },
    define: {
        __BASE_API_URL__: JSON.stringify("http://localhost:3005")
    }
})
