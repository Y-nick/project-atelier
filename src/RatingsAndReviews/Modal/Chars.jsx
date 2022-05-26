import React from 'react';

class Chars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      average: 0,
    };
  }

  render() {
    console.log(this.props.name);
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default Chars;