import React from 'react';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  average() {
    const { reviews } = this.props;
    let sum = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      if (reviews[x].recommend) {
        sum += 1;
      }
    }
    return (sum / reviews.length) * 100;
  }

  render() {
    return (
      <div>
        <div>
          {this.average()}
          % of reviews recommend this product
        </div>
      </div>
    );
  }
}

export default Recommendations;
