import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WindowSizeProvider } from './WindowsSizeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <WindowSizeProvider>
    <App />
  </WindowSizeProvider>
)
