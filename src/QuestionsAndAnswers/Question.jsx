import React from 'react';
import axios from 'axios';
import AddAnswer from './AddAnswer.jsx';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      showAll: false,
      answerModalOpen: false,
      moreLess: 'More',
      answerListID: 'answerList',
    };
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.addOrSubtract = this.addOrSubtract.bind(this);
    this.answerModal = this.answerModal.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleAnswerVote = this.handleAnswerVote.bind(this);
    this.handleReportAnswer = this.handleReportAnswer.bind(this);
  }

  handleVote() {
    const { details, fetcher } = this.props;
    const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${details.question_id}/helpful`;
    const options = {
      url: apiURL,
      method: 'put',
      headers: { authorization: process.env.API_KEY },
    };
    axios(options).then(() => {
      console.log('PUT Req successful');
    }).catch((err) => {
      console.log('error on PUT req', err);
    }).then(() => {
      fetcher();
    });
  }

  handleAnswerVote(e, answer) {
    const { fetcher } = this.props;
    const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${answer.id}/helpful`;
    const options = {
      url: apiURL,
      method: 'put',
      headers: { authorization: process.env.API_KEY },
    };
    axios(options).then(() => {
      console.log('PUT Req successful');
    }).catch((err) => {
      console.log('error on PUT req', err);
    }).then(() => {
      fetcher();
    });
  }

  handleReport() {
    const { details, fetcher } = this.props;
    const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${details.question_id}/report`;
    const options = {
      url: apiURL,
      method: 'put',
      headers: { authorization: process.env.API_KEY },
    };
    axios(options).then(() => {
      console.log('REPORT PUT Req successful');
    }).catch((err) => {
      console.log('error on REPORT PUT req', err);
    }).then(() => {
      fetcher();
    });
  }

  handleReportAnswer(e, answer) {
    const { fetcher } = this.props;
    const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${answer.id}/report`;
    const options = {
      url: apiURL,
      method: 'put',
      headers: { authorization: process.env.API_KEY },
    };
    axios(options).then(() => {
      console.log('REPORT PUT Req successful');
    }).catch((err) => {
      console.log('error on REPORT PUT req', err);
    }).then(() => {
      fetcher();
    });
  }

  toggleAnswers() {
    const { showAll, display } = this.state;
    if (display === 0) {
      this.setState({ moreLess: 'Fewer', answerListID: 'answerListExpanded' });
    } else {
      this.setState({ moreLess: 'More', answerListID: 'answerList' });
    }
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
    const {
      details, item, fetcher,
    } = this.props;
    const {
      display, answerModalOpen, moreLess, answerListID,
    } = this.state;
    const answerObj = Object.values(details.answers);
    return (
      <div id={answerListID}>
        <div className="smallQ">
          Question Helpful?
          <div
            role="button"
            tabIndex={0}
            onKeyPress={this.handleEnter}
            onClick={this.handleVote}
            id="yes"
          >
            {`Yes (${details.question_helpfulness})`}
          </div>
          <div role="button" tabIndex={0} onKeyPress={this.handleEnter} onClick={this.handleReport} id="yes">Report</div>
        </div>
        <div className="answerSmallDiv">
          <div
            role="button"
            tabIndex={0}
            className="addAnswer"
            onClick={this.answerModal}
            onKeyPress={(e) => { this.handleKeyPress(e); }}
          >
            Add Answer
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyPress={this.handleEnter}
            onClick={this.toggleAnswers}
            className="moreAnswers"
          >
            {`${moreLess} Answers`}
          </div>
        </div>
        {answerModalOpen
          ? (
            <AddAnswer
              fetcher={fetcher}
              item={item}
              details={details}
              modalFun={this.answerModal}
            />
          ) : null}
        {answerObj.map((answer, index) => (
          <div key={answer.id}>
            <div className="answer">
              {index <= display ? `A:  ${answer.body} ` : null}
              <div className="username">
                {index <= display ? `by User: ${answer.answerer_name}, ${answer.date}` : null}
              </div>
              <div className="pictures">
                {index <= display ? `${answer.photos}` : null}
              </div>
            </div>
            {index <= display
              ? (
                <div className="answerHelpDiv">
                  Answer Helpful?
                  <div role="button" tabIndex={0} onKeyPress={this.handleEnter} onClick={(e) => { this.handleAnswerVote(e, answer); }} className="answerYes">{`Yes (${answer.helpfulness})`}</div>
                  <div role="button" tabIndex={0} onKeyPress={this.handleEnter} onClick={(e) => { this.handleReportAnswer(e, answer); }} id="yes">Report</div>
                </div>
              ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Question;
