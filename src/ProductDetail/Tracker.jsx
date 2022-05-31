/* eslint-disable class-methods-use-this */
import React from 'react';

const apiRequest = require('./apiRequests');

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleTrack = (event, child) => {
    const element = event.target.className;
    const widget = child.props.className;
    const time = event.timeStamp;
    apiRequest.postInteractions(element, widget, time)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const { children } = this.props;
    return (
      <>
        {React.Children.map(children, (child) => (
          React.cloneElement(
            child,
            { onClick: (e) => this.handleTrack(e, child) },
          )
        ))}
      </>
    );
  }
}

export default Tracker;
