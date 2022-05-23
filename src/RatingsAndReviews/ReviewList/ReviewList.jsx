import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import WriteReviewModal from '../WriteReviewModal.jsx';
import List from './List.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // const array = [];

  clickHandlerOpen = (e) => {
    e.preventDefault();
    // const array = [];
    // array.push(e);
    // console.log(array);
    this.setState({ openModal: true });
  };

  handleClose = (val) => {
    // console.log(Array.isArray(this.props.reviews), this.props.reviews);
    this.setState({ openModal: val });
  };

  render() {
    return (
      <div style={List} className="grid-container3 reviewList">
        <div>
          ({this.props.reviews.length}
          ) reviews, sorted by
          <select>
            <option>Relevent</option>
            <option>Helpful</option>
            <option>Newest</option>
          </select>
        </div>
        {this.props.reviews.map((review) => (
          <ReviewItem className="listItem" body={review.body} key={review.review_id} summary={review.summary} date={review.date} help={review.helpfulness} rating={review.rating} reco={review.recommend} />
        ))}
        <button type="button" className="openModal" onClick={this.clickHandlerOpen}>Add Review </button>
        <button type="button" className="button">More Reivews</button>
        {this.state.openModal && <WriteReviewModal func={this.handleClose} />}
      </div>
    );
  }
}

export default ReviewList;
