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
    console.log(typeof this.props.reviews, this.props.reviews);
    this.setState({ openModal: val });
  };

  render() {
    return (
      <div className="review list">
        <div>
          <h1>Review List</h1>
        </div>
        <ReviewItem />
        <button type="button" className="open modal" onClick={this.clickHandlerOpen}>Add Review </button>
        {this.state.openModal && <WriteReviewModal func={this.handleClose} />}
      </div>
    );
  }
}

export default ReviewList;

/* { <div className="review list">
<div>
  <h1>Review List</h1>
</div>
<ReviewItem />
<button type="button" className="open modal" onClick={this.clickHandlerOpen}>Add Review </button>
{this.state.openModal && <WriteReviewModal func={this.handleClose} />}
</div> } */

/* <div className="review list">
<div>
  <h1>Review List</h1>
</div>
{this.props.reviews.map((review) => (
  <ReviewItem />
))}
<button type="button" className="open modal" onClick={this.clickHandlerOpen}>Add Review </button>
{this.state.openModal && <WriteReviewModal func={this.handleClose} />}
</div> */
