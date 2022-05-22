import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import RandRStyles from './RandRStyles.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  // const p_id = 6642;
  // const sort = '';

  fetchData() {
    axios({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        product_id: 66642,
        sort: 'newest',
        page: 3,
        count: 5,
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({
        product: res.data,
      }, () => console.log('here is our state:', this.state.product));
    });
  }

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
