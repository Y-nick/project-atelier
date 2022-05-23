import React from 'react';
import StarRating from './StarRating.jsx';

const ProductInfo = ({ product, styleSale, stylePrice }) => {
  console.log('turn the linting off');
  return (
    <div>
      <StarRating />
      <div>{product.category}</div>
      <div>{product.name}</div>
      <div>{styleSale || stylePrice }</div>
    </div>
  );
};

export default ProductInfo;
