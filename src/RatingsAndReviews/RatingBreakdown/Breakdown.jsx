import React from 'react';
import StarRating from '../ReviewList/StarRatingComponent/StarRating.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      average: 0,
    };
    this.averageCal = this.averageCal.bind(this);
  }

  averageCal() {
    const { reviews, meta } = this.props;
    console.log('meta: ', meta);
    let sum = 0;
    let unRoundedAvr = 0;
    let avr = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].rating) {
        sum += reviews[x].rating;
      } else {
        sum += 0;
      }
    }
    unRoundedAvr = (sum / reviews.length);
    avr = (Math.round(unRoundedAvr * 4) / 4).toFixed(2);
    const intVal = parseInt(avr);
    return intVal;
  }

  render() {
    const passingAvr = this.averageCal();
    return (
      <div>
        <div>
          <h1>
            {passingAvr}
            <StarRating rating={passingAvr} />
          </h1>
        </div>
      </div>
    );
  }
}

export default Breakdown;
