import React from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import './QuestionList.css';
import icon from './icon.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 1,
      modalOpen: false,
      search: '',
      moreLess: 'MORE',
      questionScroll: null,
      questions: [],
      page: 1,
    };

    this.openModal = this.openModal.bind(this);
    this.toggleQ = this.toggleQ.bind(this);
    this.nextPg = this.nextPg.bind(this);
    this.previousPg = this.previousPg.bind(this);
    this.questionFilter = this.questionFilter.bind(this);
  }

  // IF THIS CAUSES PROBLEMS CHANGE IT BACK TO
  // MAPPING STATE FROM PROPS, RATHER THAN SETTING PROPS TO STATE FIRST.
  static getDerivedStateFromProps(props) {
    return { questions: props.questions };
  }

  toggleQ() {
    const { questionIndex } = this.state;
    if (questionIndex === 1) {
      this.setState({ questionIndex: 20, moreLess: 'FEWER', questionScroll: 'questionScroll' });
    } else {
      this.setState({ questionIndex: 1, moreLess: 'MORE', questionScroll: null });
    }
  }

  openModal(cb) {
    this.setState({ modalOpen: cb });
  }

  nextPg() {
    const { page } = this.state;
    const { fetcher } = this.props;
    fetcher(page + 1, 10);
    this.setState({ page: page + 1 });
  }

  previousPg() {
    const { page } = this.state;
    const { fetcher } = this.props;
    if (page > 1) {
      fetcher(page - 1, 10);
      this.setState({ page: page - 1 });
    }
  }

  // decided to factor out this code from the render function;
  questionFilter(questionsData, search) {
    return questionsData.filter((question) => {
      if (search.length < 3) {
        return question;
      }
      if (search.length >= 3
      && question.question_body.toLowerCase().includes(search.toLowerCase())) {
        return question;
      }
      return null;
    });
  }

  render() {
    const {
      questionIndex, modalOpen, search, moreLess, questionScroll,
      questions, page,
    } = this.state;
    const { curProduct, fetcher } = this.props;
    return (
      <div className="QADiv">
        <h2>QUESTIONS AND ANSWERS</h2>
        <form className="searchDiv">
          <input
            id="search"
            type="search"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={(e) => { this.setState({ search: e.target.value }); }}
          />
          <div className="searchIconDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d={icon} />
            </svg>
          </div>
        </form>
        <div id={questionScroll}>
          {
            this.questionFilter(questions, search).map((elem, index) => (
              <div key={elem.question_id} className="QAPair">
                {index <= questionIndex
                  ? (
                    <div className="question">
                      {`Q:  ${elem.question_body}`}
                    </div>
                  ) : null}
                {index <= questionIndex
                  ? <Question fetcher={fetcher} className="answer" item={curProduct} details={elem} onClick={this.passClick} />
                  : null}
              </div>
            ))
          }
          <div className="prevNext">
            {questionIndex > 1 && page > 1
              ? (
                <div role="button" tabIndex={0} onClick={this.previousPg} onKeyPress={this.handleEnter} className="nextQuestion">
                  {'<'}
                  Previous Page
                </div>
              )
              : null}
            {questionIndex > 1
              ? (
                <div role="button" tabIndex={0} onClick={this.nextPg} onKeyPress={this.handleEnter} className="nextQuestion">
                  Next Page
                  {'>'}
                </div>
              )
              : null}
          </div>
        </div>
        <div className="QAButtonDiv">
          <button className="butt1" onClick={this.toggleQ} type="button">{`${moreLess} ANSWERED QUESTIONS`}</button>
          <button className="butt2" type="button" onClick={this.openModal}>ADD A QUESTION</button>
        </div>
        {modalOpen
          ? <AddQuestion fetcher={fetcher} item={curProduct} modal={this.openModal} /> : null}
      </div>
    );
  }
}

export default QuestionList;
