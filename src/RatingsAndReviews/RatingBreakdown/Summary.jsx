import React from 'react';
import BarRating from './BarRatingComponent/BarRating.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: 0,
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

  render() {
    return (
      <div>
        <div>
          <BarRating text="5 Stars" bars={4} />
        </div>
        <div>
          <BarRating text="4 Stars" bars={2} />
        </div>
        <div>
          <BarRating text="3 Stars" bars={7} />
        </div>
        <div>
          <BarRating text="2 Stars" bars={5} />
        </div>
        <div>
          <BarRating text="1 Stars" bars={1} />
        </div>
        <div>size(------------------------------------)</div>
        <div>comofort(-----------------------------)</div>
      </div>
    );
  }
}

export default Summary;

// const { reviews } = this.props;
// const totalReviews = reviews.length;
// let totalFive = 0;
// let totalFour = 0;
// let totalThree = 0;
// let totalTwo = 0;
// let totalOne = 0;

// for (let x = 0; x < reviews.length; x += 1) {
//   if (reviews[x].rating === 5) {
//     totalFive += 1;
//   }
//   if (reviews[x].rating === 4) {
//     totalFour += 1;
//   }
//   if (reviews[x].rating === 3) {
//     totalThree += 1;
//   }
//   if (reviews[x].rating === 2) {
//     totalTwo += 1;
//   }
//   if (reviews[x].rating === 1) {
//     totalOne += 1;
//   }
// }

// const fiveStarAv = (totalFive / totalReviews) * 10;
// const fourStarAv = (totalFour / totalReviews) * 10;
// const threeStarAv = (totalThree / totalReviews) * 10;
// const twoStarAv = (totalTwo / totalReviews) * 10;
// const oneStarAv = (totalOne / totalReviews) * 10;
