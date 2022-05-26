import React from 'react';
import Modal from 'react-modal';
import './AddQuestion.css';
import axios from 'axios';

const startState = {
  question: '',
  nickname: '',
  email: '',
  review: '',
  questionError: '',
  nicknameError: '',
  emailError: '',
  modalOpen: true,
  newlyPosted: [],
};

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.closeModal = this.closeModal.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      document.getElementById('formContainer').reset();
      this.setState(startState);
      alert('Submission Successful!');
      this.postQuestion();
    } else {
      alert('Please fill out required fields');
      document.getElementById('formContainer').reset();
    }
  }

  validate() {
    const { question, nickname, email } = this.state;
    let questionError = '';
    let nicknameError = '';
    let emailError = '';

    if (question.length < 5) {
      questionError = 'Please enter a question';
    }
    if (nickname.length < 2) {
      nicknameError = 'Please enter a valid nickname';
    }
    if (!email.includes('@') || !email.includes('.com')) {
      emailError = 'Please enter valid email';
    }

    if (questionError || nicknameError || emailError) {
      this.setState({ questionError, nicknameError, emailError });
      return false;
    }
    return true;
  }

  closeModal() {
    const { modal } = this.props;
    this.setState({ modalOpen: false });
    modal(false);
  }

  postQuestion() {
    const { question, nickname, email } = this.state;
    const { item, post, fetcher, } = this.props;
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions';
    const options = {
      url: apiURL,
      method: 'post',
      data: {
        body: question,
        name: nickname,
        email: email,
        product_id: item.id,
      },
      headers: { authorization: process.env.API_KEY },
    };
    const options2 = {
      url: apiURL,
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        product_id: item.id,
        page: 2,
        count: 10,
      },
    };
    axios(options).then(() => {
      console.log('question post successful');
    }).catch((err) => {
      console.log('error posting data', err);
    }).then(() => {
      // axios(options2).then((data) => {
      //   this.setState({ newlyPosted: data.data.results });
      //   post(data.data.results);
      // }).catch((err) => {
      //   console.log('error fetching data new posts', err);
      // });
      fetcher();
    });
  }

  render() {
    const {
      modalOpen, questionError, nicknameError, emailError,
    } = this.state;

    const { item } = this.props;

    return (
      <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
        <form id="formContainer">
          <div className="x" onClick={this.closeModal}>x</div>
          <h1>ASK YOUR QUESTION</h1>
          <h3>{`About the ${item.name}`}</h3>
          <div className="questionDiv">
            <textarea
              rows="6"
              cols="60"
              placeholder="*Your Question..."
              onChange={(e) => { this.setState({ question: e.target.value }); }}
            />
            {!questionError ? null : <p className="error">{questionError}</p>}
          </div>
          <div className="nicknameDiv">
            *What is your nickname?
            <input
              id="nickname"
              placeholder="Example: jackson11!"
              onChange={(e) => { this.setState({ nickname: e.target.value }); }}
            />
            {!nicknameError ? null : <p className="error">{nicknameError}</p>}
            <p className="privacy">For privacy reasons, do not use your full name or email address</p>
          </div>
          <div className="emailDiv">
            *What is your email?
            <input
              id="email"
              placeholder="example@outlook.com"
              onChange={(e) => { this.setState({ email: e.target.value }); }}
            />
            {!emailError ? null : <p className="error">{emailError}</p>}
          </div>
          <div className="reviewDiv">
            What did you like or dislike about the product?
            <textarea
              className="review"
              rows="6"
              cols="60"
              placeholder="Your thoughts..."
              onChange={(e) => { this.setState({ review: e.target.value }); }}
            />
          </div>
          <div>
            <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
            <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default AddQuestion;
