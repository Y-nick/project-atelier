import React from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import './QuestionList.css';

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
      page: 2,
    };

    this.openModal = this.openModal.bind(this);
    this.toggleQ = this.toggleQ.bind(this);
    this.nextPg = this.nextPg.bind(this);
  }

  // IF THIS CAUSES PROBLEMS CHANGE IT BACK TO MAPPING STATE FROM PROPS, RATHER THAN SETTING PROPS TO STATE FIRST.
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
    let newQuestions = fetcher(page, 10);
    this.setState( {page: page + 1 , questions: newQuestions});
  }

  render() {
    const {
      questionIndex, modalOpen, search, moreLess, questionScroll, questions,w
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
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </form>
        <div id={questionScroll}>
          {
            questions.filter((question) => {
              if (search.length < 3) {
                return question;
              }
              if (search.length >= 3
              && question.question_body.toLowerCase().includes(search.toLowerCase())) {
                return question;
              }
              return null;
            }).map((elem, index) => (
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
          {questionIndex > 1
            ? <div role="button" tabIndex={0} onClick={this.nextPg} onKeyPress={this.handleEnter} className="nextQuestion">Next Page ></div>
            : null}
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
