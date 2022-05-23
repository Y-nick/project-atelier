import React from 'react';
import Item from './Item.css';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.reco) {
      console.log(this.props.reco);
    }
  }

  render() {
    return (
      <div className="grid-container4" style={Item}>
        <h3 className="grid-item-1">
          Star Ratings: {this.props.rating}</h3>
        <div className="grid-item-2">
          <h5>{this.props.date}</h5>
        </div>
        <h3 className="grid-item-3">{this.props.summary}</h3>
        <p className="grid-item-4">{this.props.body}</p>
        <h5 className="grid-item-5">
          recomend:
        </h5>
        <h5 className="grid-item-6">
          Helpful? Yes: ({this.props.help}
          ) | Report
        </h5>
      </div>
    );
  }
}

export default ReviewListItem;
