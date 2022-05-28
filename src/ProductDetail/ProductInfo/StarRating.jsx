import React from 'react';
import star from '../images/star.svg';

const StarRating = ({ review }) => {
  const calcReview = () => {
    //
  };

  return (
    <div className="star-rating-container">
      <div className="stars">
        <img className="star" src={star} alt="Star" />
        <img className="star" src={star} alt="Star" />
        <img className="star" src={star} alt="Star" />
        <img className="star" src={star} alt="Star" />
        <img className="star" src={star} alt="Star" />
      </div>
      <div className="read-all">
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
};

export default StarRating;
