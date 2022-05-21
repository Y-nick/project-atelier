import React from 'react';
import ReviewItem from './ReviewItem.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="review list">
        <div>Review List</div>
        <ReviewItem />
      </div>
    );
  }
}

export default ReviewList;
