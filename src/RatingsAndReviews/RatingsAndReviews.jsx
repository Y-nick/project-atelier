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
      reviews: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  // const p_id = 6642;

  // gets reviews sorted by (selected input) data and sets it to this components state

  fetchData(sortType) {
    const { product } = this.state;
    axios({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        product_id: 66642,
        sort: sortType,
        page: 3,
        count: 5,
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({
        product: res.data,
        reviews: res.data.results,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <div style={RandRStyles} className="grid-container ratingsAndReviews">
          <div className="grid-item ratingBreakdown">
            <h2>Ratings and Reviews</h2>
            <RatingBreakdown reviews={reviews} />
          </div>
          <div className="grid-item reviewList">
            <h5/>
            <ReviewList reviews={reviews} sort={this.fetchData} />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
