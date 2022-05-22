import React from 'react';

const ProductDesc = ({ desc, features }) => (
  <div>
    <div>{desc}</div>
    <div>
      <div>
        Features
      </div>
      {features.map((feature) => (
        <div key={feature.feature}>
          {feature.feature}
          :
          {' '}
          {feature.value}
        </div>
      ))}
    </div>
  </div>
);

export default ProductDesc;
