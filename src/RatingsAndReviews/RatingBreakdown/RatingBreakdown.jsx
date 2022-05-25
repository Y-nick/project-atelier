import React from 'react';
import Breakdown from './Breakdown.jsx';
import Recommendations from './Recommendations.jsx';
import Summary from './Summary.jsx';
import rBreakdown from './rBreakdown.css';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { reviews } = this.props;
    return (
      <div style={rBreakdown} className="grid-container2 ratingsBreakdown">
        <div className="grid-item1 breakDown">
          <Breakdown reviews={reviews} />
        </div>
        <div className="grid-item2 recommendations">
          <Recommendations reviews={reviews} />
        </div>
        <div className="grid-item3 summary">
          <Summary />
        </div>
      </div>
    );
  }
}

export default RatingsBreakdown;
