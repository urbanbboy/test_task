import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { RouterProvider } from '@app/providers/routerProvider'
import { StoreProvider } from '@app/providers/storeProvider'
import { ToastContainer } from 'react-toastify'

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider>
            <ToastContainer position='top-center' />
            <StoreProvider>
                <App />
            </StoreProvider>
        </RouterProvider>
    </StrictMode>,
)
