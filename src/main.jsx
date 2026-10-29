import './pages/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App.jsx'
import ProductosPage from './pages/Productos_page.jsx'
import ProductoDetalle2 from './pages/ProductoDetalles2.jsx'
import ScrollManager from './components/ScrollManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/productos/:slug" element={<ProductoDetalle2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)