import React from 'react';
import StarRating from './StarRating.jsx';
import Share from './Share.jsx';
import './productInfo.css';

const ProductInfo = ({ product, styleSale, stylePrice }) => (
  <div className="product-info-container">
    <div className="ratings-and-share-container">
      <StarRating />
      <Share />
    </div>
    <div className="product-category">{product.category}</div>
    <div className="product-name">{product.name}</div>
    {styleSale
      ? (
        <div>
          <span className="sale-price">{`$${styleSale}  `}</span>
          <span className="sale-strikethrough">
            {`$${stylePrice}`}
          </span>
        </div>
      )
      : <div className="reg-price">{stylePrice}</div>}
  </div>
);

export default ProductInfo;
