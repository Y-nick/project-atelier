import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import plus from '../images/plus.svg';
import star from '../images/star.svg';
import './cart.css';

const apiRequests = require('../apiRequests');

const AddToCart = ({ SKUs }) => {
  const [curSKU, setSKU] = useState(0);
  const [size, setSize] = useState('');
  const [stockCount, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const handleClick = () => {
    apiRequests.postCart(curSKU, quantity)
      .then((success) => console.log(success))
      .catch((error) => console.log(error));
  };
  return (
    <div className="add-to-cart-container">
      <SizeSelector
        SKUs={SKUs}
        size={size}
        setSize={setSize}
        setCount={setCount}
        setSKU={setSKU}
      />
      <QuantitySelector
        quantity={quantity}
        stockCount={stockCount}
        setQuantity={setQuantity}
      />
      <button
        className="cart-button"
        type="button"
        onClick={handleClick}
      >
        <span>Add to Cart</span><span><img src={plus} /></span>
      </button>
      <button className="star-button" type="button"><img src={star} /></button>
    </div>
  );
};

export default AddToCart;
