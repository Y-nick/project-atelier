import React from 'react';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>(Summary of Star Ratings)</div>
        <div>(5 stars --------------------------------)</div>
        <div>(4 stars --------------------------------)</div>
        <div>(3 stars --------------------------------)</div>
        <div>(2 stars --------------------------------)</div>
        <div>(1 stars --------------------------------)</div>
      </div>
    );
  }
}

export default Summary;
