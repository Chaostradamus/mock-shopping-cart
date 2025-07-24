import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this import path is correct
import { ProductsProvider } from './providers/ProductsProvider';

import { CartProvider } from './context/CartContext';

// ... other imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);