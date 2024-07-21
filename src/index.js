import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './contexts/ProductContext';

const root = createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);