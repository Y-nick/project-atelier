import React from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import SearchBar from './SearchBar.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionIndex: 1,
      modalOpen: false,
    };

    this.fetcherQuestions = this.fetcherQuestions.bind(this);
    this.openModal = this.openModal.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.fetcherQuestions();
  }

  // REPLACE: once id is received from overview component getDerived state method will be removed...
  static getDerivedStateFromProps(props) {
    return {
      sampleItem: props,
    };
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
        count: 5,
      },
    };
    axios(options).then((data) => {
      this.setState({ questions: data.data.results });
    }).catch((err) => {
      console.log('error fetching data', err);
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  search(cb) {
    this.setState()
  }

  render() {
    const { questions, questionIndex, modalOpen } = this.state;
    return (
      <div>
        <div>QUESTIONS AND ANSWERS</div>
        <SearchBar questions={questions} search={this.search} />
        <div>
          {
            questions.map((item, index) => (
              <div key={item.question_id}>
                {index <= questionIndex ? `Q:  ${item.question_body}` : null}
                {index <= questionIndex ? <Question details={item} /> : null}
              </div>
            ))
          }
        </div>
        <button type="button">MORE ANSWERED QUESTIONS</button>
        <button type="button" onClick={this.openModal}>ADD A QUESTION  +</button>
        {modalOpen ? <AddQuestion /> : null}
      </div>
    );
  }
}

export default QuestionList;
