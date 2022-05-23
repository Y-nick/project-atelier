import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
// import './cart.css';

const AddToCart = ({ SKUs }) => {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <div>
        <SizeSelector SKUs={SKUs} size={size} setSize={setSize} />
        <QuantitySelector size={size} />
      </div>
      <div>
        <button className="cart-button" type="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default AddToCart;
