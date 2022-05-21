import React from 'react';
import Breakdown from './Breakdown.jsx';
import Recommendations from './Recommendations.jsx';
import Summary from './Summary.jsx';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>Ratings Breakdown</div>
        <Breakdown />
        <Recommendations />
        <Summary />
      </div>
    );
  }
}

export default RatingsBreakdown;
