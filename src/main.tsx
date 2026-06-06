import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import { HomePage } from '@/pages/HomePage'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found. Check index.html.')
}

createRoot(root).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)
