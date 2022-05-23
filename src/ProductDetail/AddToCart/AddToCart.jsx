import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const apiRequests = require('../apiRequests');

// import './cart.css';

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
    <div>
      <div>
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
      </div>
      <div>
        <button
          className="cart-button"
          type="button"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
