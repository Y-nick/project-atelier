import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { rating } = this.props;
    return (
      <div>
        {[...Array(rating)].map((star) => (
          '*'
        ))}
      </div>
    );
  }
}
export default StarRating;
