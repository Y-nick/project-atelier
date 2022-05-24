import React from 'react';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      showAll: false,
    };
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.addOrSubtract = this.addOrSubtract.bind(this);
  }
  // () => {this.setState({ display: 20 }); }

  toggleAnswers() {
    const { showAll } = this.state;
    this.setState({ showAll: !showAll });
    this.addOrSubtract();
  }

  addOrSubtract() {
    const { display } = this.state;
    if (display === 0) {
      this.setState({ display: 20 });
    } if (display === 20) {
      this.setState({ display: 0 });
    }
  }

  render() {
    const { details } = this.props;
    const { display } = this.state;
    const answerObj = Object.values(details.answers);
    return (
      <div>
        {answerObj.map((answer, index) => (
            <div className="answer" key={answer.id} onClick={this.toggleAnswers}>
              {index <= display ? `A:  ${answer.body}` : null}
              <div className="username">
                {index <= display ? `by User: ${answer.answerer_name}, ${answer.date}` : null}
              </div>
              <div className="pictures">
                {index <= display ? `${answer.photos}` : null}
              </div>
            </div>
        ))}
      </div>
    );
  }
}

export default Question;
