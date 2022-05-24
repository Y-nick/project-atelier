import React from 'react';
import star from '../images/star.svg';

const StarRating = () => (
  <div>
    <span>
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
      <img src={star} alt="Star" />
    </span>
    <span>
      {' '}
      Read all
      {' '}
      <a href="#">
        #
      </a>
      {' '}
      reviews
    </span>
  </div>
);

export default StarRating;
