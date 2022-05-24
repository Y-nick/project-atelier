import React from 'react';
import StarRating from './StarRating.jsx';
import Share from './Share.jsx';
import './productInfo.css';

const ProductInfo = ({ product, styleSale, stylePrice }) => {
  console.log('turn the linting off');
  return (
    <div className="product-info-container">
      <span><StarRating /></span>
      <span><Share /></span>
      <div>{product.category}</div>
      <div>{product.name}</div>
      {styleSale
        ? (
          <div>
            <span>{styleSale}</span>
            <span>
              {`!${stylePrice}`}
            </span>
          </div>
        )
        : <div>{stylePrice}</div>}
    </div>
  );
};

export default ProductInfo;
