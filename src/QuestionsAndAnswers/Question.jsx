import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
    };
  }

  render() {
    const { details } = this.props;
    const { display } = this.state;
    const answerObj = Object.values(details.answers);
    return (
      <div>
        {answerObj.map((answer, index) => (
          <div key={answer.id}>
            {index <= display ? `A:  ${answer.body}` : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Question;
