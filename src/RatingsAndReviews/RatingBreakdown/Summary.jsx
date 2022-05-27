/* eslint-disable react/sort-comp */
import React from 'react';
import BarRating from './BarRatingComponent/BarRating.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  fives() {
    const { reviews } = this.props;
    const totalReviews = reviews.length;
    let totalFive = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].rating === 5) {
        totalFive += 1;
      }
    }
    return (totalFive / totalReviews) * 10;
  }

  fours() {
    const { reviews } = this.props;
    const totalReviews = reviews.length;
    let totalFour = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].rating === 4) {
        totalFour += 1;
      }
    }
    return (totalFour / totalReviews) * 10;
  }

  threes() {
    const { reviews } = this.props;
    const totalReviews = reviews.length;
    let totalThree = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].rating === 3) {
        totalThree += 1;
      }
    }
    return (totalThree / totalReviews) * 10;
  }

  twos() {
    const { reviews } = this.props;
    const totalReviews = reviews.length;
    let totalTwos = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].rating === 2) {
        totalTwos += 1;
      }
    }
    return (totalTwos / totalReviews) * 10;
  }

  ones() {
    const { reviews } = this.props;
    const totalReviews = reviews.length;
    let totalOnes = null;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].rating === 1) {
        totalOnes += 1;
      }
    }
    return (totalOnes / totalReviews) * 10;
  }

  render() {
    //  console.log(this.state.fives);
    const fives = this.fives();
    const fours = this.fours();
    const threes = this.threes();
    const twos = this.twos();
    const ones = this.ones();
    return (
      <div>
        <div>
          <BarRating text="5 Stars" bars={fives} />
        </div>
        <div>
          <BarRating text="4 Stars" bars={fours} />
        </div>
        <div>
          <BarRating text="3 Stars" bars={threes} />
        </div>
        <div>
          <BarRating text="2 Stars" bars={twos} />
        </div>
        <div>
          <BarRating text="1 Stars" bars={ones} />
        </div>
        <div>size(------------------------------------)</div>
        <div>comofort(-----------------------------)</div>
      </div>
    );
  }
}

export default Summary;
