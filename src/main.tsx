import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
// Importamos o provedor do carrinho
import { CartProvider } from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Embrulhamos o App com o CartProvider */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)