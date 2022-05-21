import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import WriteReviewModal from '../WriteReviewModal.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickHandlerOpen = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  handleClose = (val) => {
    this.setState({ openModal: val });
  };

  render() {
    return (
      <div className="review list">
        <div>Review List</div>
        <ReviewItem />
        <button type="button" className="open modal" onClick={this.clickHandlerOpen}>Add Review </button>
        {this.state.openModal && <WriteReviewModal func={this.handleClose} />}
      </div>
    );
  }
}

export default ReviewList;
