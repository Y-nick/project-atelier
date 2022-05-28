/* eslint-disable react/no-array-index-key */
import React from 'react';
import fillStar from '../images/fill-star.svg';
import emptyStar from '../images/empty-star.svg';
import quarterStar from '../images/quarter-star.svg';
import halfStar from '../images/half-star.svg';
import threeQuarterStar from '../images/three-quarter-star.svg';

const StarRating = ({ review }) => {
  const stars = [];
  if (review.ratings) {
    let denominator = 0;
    let numerator = 0;
    const ratings = Object.entries(review.ratings);
    ratings.forEach((rating) => {
      numerator += (Number(rating[0]) * Number(rating[1]));
      denominator += Number(rating[1]);
    });
    const score = numerator / denominator;
    const roundScore = (Math.round(score * 4) / 4).toFixed(2);
    const fullStars = Math.floor(roundScore);
    const partialStars = roundScore % 1;
    const remainingStars = 5 - (fullStars + 1);
    for (let i = 0; i < fullStars; i += 1) stars.push(1);
    stars.push(partialStars);
    for (let i = 0; i < remainingStars; i += 1) stars.push(0);
  }

  return (
    <div className="star-rating-container">
      <div className="stars">
        {stars.map((star, position) => {
          let starImg = '';
          if (star === 1) {
            starImg = <img className="star" key={position} src={fillStar} alt="Star" />;
          } else if (star === 0.25) {
            starImg = <img className="star" key={position} src={quarterStar} alt="Star" />;
          } else if (star === 0.50) {
            starImg = <img className="star" key={position} src={halfStar} alt="Star" />;
          } else if (star === 0.75) {
            starImg = <img className="star" key={position} src={threeQuarterStar} alt="Star" />;
          } else {
            starImg = <img className="star" key={position} src={emptyStar} alt="Star" />;
          }
          return starImg;
        })}

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
