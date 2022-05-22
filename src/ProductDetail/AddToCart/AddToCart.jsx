import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const AddToCart = (props) => (
  <div>
    <div>
      <span><SizeSelector /></span>
      <span><QuantitySelector /></span>
    </div>
    <div>
      <button className="cart-button" type="button">Add to Cart</button>
    </div>
  </div>
);

export default AddToCart;
