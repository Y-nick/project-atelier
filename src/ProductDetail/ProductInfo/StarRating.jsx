import React from 'react';
import star from '../images/star.svg';

const StarRating = () => (
  <div className="star-rating-container">
    <div className="stars">
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
    </div>
    <div>
      Read all
      {' '}
      <a href="#">
        #
      </a>
      {' '}
      reviews
    </div>
  </div>
);

export default StarRating;
