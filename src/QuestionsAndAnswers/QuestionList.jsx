import React from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import AddAnswer from './AddAnswer.jsx';
import './QuestionList.css';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionIndex: 1,
      modalOpen: false,
      search: '',
      moreLess: 'MORE',
    };

    this.fetcherQuestions = this.fetcherQuestions.bind(this);
    this.openModal = this.openModal.bind(this);
    this.toggleQ = this.toggleQ.bind(this);
    //this.passToList = this.passToList.bind(this);
  }

  componentDidMount() {
    this.fetcherQuestions();
  }

  // REPLACE: once id is received from overview component getDerived state method will be removed...
  // static getDerivedStateFromProps(props) {
  //   return {
  //     sampleItem: props,
  //   };
  // }

  toggleQ() {
    const { questionIndex } = this.state;
    if (questionIndex === 1) {
      this.setState({ questionIndex: 20, moreLess: 'FEWER' });
    } else {
      this.setState({ questionIndex: 1, moreLess: 'MORE' });
    }
  }

  fetcherQuestions() {
    const { item } = this.props;
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions';
    const options = {
      url: apiURL,
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        product_id: item.id,
        page: 1,
        count: 11,
      },
    };
    axios(options).then((data) => {
      this.setState({ questions: data.data.results });
    }).catch((err) => {
      console.log('error fetching data', err);
    });
  }

  openModal(cb) {
    this.setState({ modalOpen: cb });
  }

  // passToList(cb) {
  //   this.setState({ questions: cb });
  // }

  render() {
    const {
      questions, questionIndex, modalOpen, search, moreLess,
    } = this.state;
    const { item } = this.props;
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </form>
        <div>
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
                  ? <Question fetcher={this.fetcherQuestions} className="answer" item={item} details={elem} onClick={this.passClick} />
                  : null}
              </div>
            ))
          }
        </div>
        <div className="QAButtonDiv">
          <button className="butt1" onClick={this.toggleQ} type="button">{`${moreLess} ANSWERED QUESTIONS`}</button>
          <button className="butt2" type="button" onClick={this.openModal}>ADD A QUESTION</button>
        </div>
        {modalOpen
          ? <AddQuestion fetcher={this.fetcherQuestions} item={item} modal={this.openModal} /> : null}
      </div>
    );
  }
}

export default QuestionList;
