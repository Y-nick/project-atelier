import React from 'react';
import Modal from 'react-modal';
import AddAnswer from './AddAnswer.jsx';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      showAll: false,
      answerModalOpen: false,
      questionVotes: 0,
      answerVotes: 0,
    };
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.addOrSubtract = this.addOrSubtract.bind(this);
    this.answerModal = this.answerModal.bind(this);
  }
  // () => {this.setState({ display: 20 }); }

  toggleAnswers() {
    const { showAll } = this.state;
    this.setState({ showAll: !showAll });
    this.addOrSubtract();
  }

  answerModal(cb) {
    this.setState({ answerModalOpen: cb });
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
    const { details, item, fetcher } = this.props;
    const { display, answerModalOpen, questionVotes, answerVotes } = this.state;
    const answerObj = Object.values(details.answers);
    return (
      <div>
        <div className="smallQ">
          Question Helpful?
          <div onClick={() => {this.setState({ questionVotes: questionVotes + 1 }); }} id="yes">{`Yes (${questionVotes})`}</div>
        </div>
        <div className="answerSmallDiv">
          {/* <div className="smallA">
            Answer Helpful?
           <div onClick={() => {this.setState({ answerVotes: answerVotes + 1 }); }} id="yes">{`Yes (${answerVotes})`}</div>
          </div> */}
          <div className="addAnswer" onClick={this.answerModal}>Add Answer</div>
          <div onClick={this.toggleAnswers} className="moreAnswers">More Answers</div>
        </div>
        {answerModalOpen ? <AddAnswer fetcher={fetcher} item={item} details={details} modalFun={this.answerModal} /> : null}
        {answerObj.map((answer, index) => (
            <div className="answer" key={answer.id} >
              {index <= display ? `A:  ${answer.body} ` : null}
              <div className="username">
                {index <= display ? `by User: ${answer.answerer_name}, ${answer.date}` : null}
              </div>
              <div className="pictures">
                {index <= display ? `${answer.photos}` : null}
              </div>
              <div>
              </div>
            </div>
        ))}
      </div>
    );
  }
}

export default Question;
