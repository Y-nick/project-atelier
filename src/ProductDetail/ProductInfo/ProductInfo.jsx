import React from 'react';
import StarRating from './StarRating.jsx';
import Share from './Share.jsx';
import './productInfo.css';

const ProductInfo = ({ product, styleSale, stylePrice }) => (
  <div className="product-info-container">
    <div className="ratings-and-share-container">
      <span><StarRating /></span>
      <span><Share /></span>
    </div>
    <div className="product-category">{product.category}</div>
    <div className="product-name">{product.name}</div>
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

export default ProductInfo;
