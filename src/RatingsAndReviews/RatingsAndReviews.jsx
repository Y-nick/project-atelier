import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // ComponentDidMount() {
  // }

  render() {
    return (
      <div>
        <RatingBreakdown />
        <ReviewList />
      </div>
    );
  }
}

export default RatingsAndReviews;
