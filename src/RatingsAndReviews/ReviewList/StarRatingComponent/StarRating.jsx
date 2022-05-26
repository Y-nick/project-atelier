import React from 'react';
import star from './img/star.svg';
import starFill from './img/star-fill.svg';
import Star from './Star.css';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { rating } = this.props;
    console.log('star rating input:', rating);
    return (
      <div>
        <div className="offStars" style={Star}>
          <img className="offStar" src={star} alt="" />
          <img className="offStar" src={star} alt="" />
          <img className="offStar" src={star} alt="" />
          <img className="offStar" src={star} alt="" />
          <img className="offStar" src={star} alt="" />
        </div>
        <div className="onStars" style={Star}>
          {rating && [...Array(rating)].map((starI, index) => (
            <img className="onStar" src={starFill} alt="" key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default StarRating;
