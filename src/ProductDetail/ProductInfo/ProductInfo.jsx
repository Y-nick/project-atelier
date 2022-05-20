import React from 'react';

const ProductInfo = (props) => {
  console.log('turn the linting off');
  return (
    <div>
      <StarRating />
      <div>{props.category}</div>
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
}



export default ProductInfo;