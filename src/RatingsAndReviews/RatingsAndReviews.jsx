import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import WriteReviewModal from './WriteReviewModal.jsx';
// import { useState } from 'react';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  // const [openModal, setOpenModal] = useState(false);

  clickHandlerOpen = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  handleClose = (val) => {
    this.setState({ openModal: val });
  };

  render() {
    return (
      <div>
        <RatingBreakdown />
        <ReviewList />
        <button type="button" className="open modal" onClick={this.clickHandlerOpen}>Add Review </button>
        {this.state.openModal && <WriteReviewModal func={this.handleClose} />}
      </div>
    );
  }
}

export default RatingsAndReviews;
