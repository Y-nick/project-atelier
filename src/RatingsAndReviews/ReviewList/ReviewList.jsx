import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import WriteReviewModal from '../WriteReviewModal.jsx';
import List from './List.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'relevant',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // sort list

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
    this.props.sort(event.target.value);
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

  render() {
    return (
      <div style={List} className="grid-container3 reviewList">
        <div>
          ({this.props.reviews.length}
          ) reviews, sorted by
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="relevent">Relevent</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        {this.props.reviews.map((review) => (
          <ReviewItem className="listItem" body={review.body} key={review.review_id} summary={review.summary} date={review.date} help={review.helpfulness} rating={review.rating} reco={review.recommend} name={review.reviewer_name} />
        ))}
        <button type="button" className="openModal" onClick={this.clickHandlerOpen}>Add Review </button>
        <button type="button" className="button">More Reivews</button>
        {this.state.openModal && <WriteReviewModal func={this.handleClose} />}
      </div>
    );
  }
}

export default ReviewList;
