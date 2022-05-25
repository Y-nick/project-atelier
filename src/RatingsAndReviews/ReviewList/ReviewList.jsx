import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import WriteReviewModal from '../WriteReviewModal.jsx';
import List from './List.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'relevant',
      more: 'false',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  // sort list

  handleChange(event) {
    const { sort } = this.props;
    // console.log(event.target.value);
    this.setState({ value: event.target.value });
    sort(event.target.value);
  }

  // modal open

  clickHandlerOpen = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  // modal close

  handleClose = (val) => {
    this.setState({ openModal: val });
  };

  // more reviews

  handleMoreReviews = (e) => {
    const { more } = this.state;
    e.preventDefault();
    if (more) {
      this.setState({ more: false });
    } else {
      this.setState({ more: true });
    }
  };

  render() {
    const { more } = this.state;
    const { value, openModal } = this.state;
    const { reviews } = this.props;
    let reviewItem;
    let bChange;
    if (more) {
      reviewItem = reviews.slice(0, 2);
      bChange = 'More Items';
    } else {
      reviewItem = reviews;
      bChange = 'Less Items';
    }
    return (
      <div style={List} className="grid-container3 reviewList">
        <div>
          (
          {reviews.length}
          ) reviews, sorted by
          <select value={value} onChange={this.handleChange}>
            <option value="relevent">Relevent</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        {reviewItem.map((review) => (
          <ReviewItem
            className="listItem"
            body={review.body}
            key={review.review_id}
            summary={review.summary}
            date={review.date}
            help={review.helpfulness}
            rating={review.rating}
            reco={review.recommend}
            name={review.reviewer_name}
            resp={review.response}
          />
        ))}
        <button type="button" className="button" onClick={this.handleMoreReviews}>{bChange}</button>
        {openModal && <WriteReviewModal func={this.handleClose} />}
        <button type="button" className="openModal" onClick={this.clickHandlerOpen}>Add Review </button>
      </div>
    );
  }
}

export default ReviewList;
