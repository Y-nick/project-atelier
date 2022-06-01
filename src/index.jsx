import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductDetail from './ProductDetail/ProductDetail.jsx';

const root = createRoot(document.getElementById('root'));

const App = () => (
  <div>
    <ProductDetail />
  </div>
);

root.render(<App />);
