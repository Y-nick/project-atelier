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
      <div
        className="cart-button"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        tabIndex="0"
      >
        <span className="cart-text">ADD TO CART</span>
        <span>
          <img className="plus" src={plus} alt="Plus" />
        </span>
      </div>
      <div className="star-button" role="button" aria-label="Add to outfit"><img src={star} alt="star" /></div>
    </div>
  );
};

export default AddToCart;
