import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
// import requests from '../ProductDetail/apiRequestsTemplate.js';
import RandRStyles from './RandRStyles.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // requests()

  render() {
    return (
      <div style={RandRStyles} className="grid-container ratingsAndReviews">
        <div className="grid-item ratingBreakdown">
          <RatingBreakdown />
        </div>
        <div className="grid-item reviewList">
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
