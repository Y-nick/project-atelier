import React from 'react';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  average() {
    const { reviews } = this.props;
    let sum = 0;
    let unR = 0;
    for (let x = 0; x < reviews.length; x += 1) {
      sum += reviews[x].rating;
    }
    unR = (sum / reviews.length).toString();
    return (Math.round(unR * 4) / 4).toFixed(2);
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.average()}
          </h1>
        </div>
      </div>
    );
  }
}

export default Breakdown;
