import React from 'react';
import './description.css';

const ProductDesc = ({ slogan, desc, features }) => (
  <div className="product-desc-container">
    <div className="description-wrapper">
      <div className="description">
        <div className="slogan">{slogan}</div>
        <div className="description-content">{desc}</div>
      </div>
      <div className="features">
        <div className="feature-heading">
          Features
        </div>
        {features.map((feature) => (
          <div className="feature-points" key={feature.feature}>
            {feature.feature}
            :
            {' '}
            {feature.value}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductDesc;
