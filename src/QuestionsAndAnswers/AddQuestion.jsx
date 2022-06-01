import React from 'react';
import Modal from 'react-modal';
import './AddQuestion.css';
import axios from 'axios';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    // backgroundColor: 'rgba(189, 28, 28, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '50px',
    // top: '200px',
    left: '20%',
    // right: '300px',
    bottom: '100px',
    width: '50em',
    height: '50em',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  handleKeyPress(e) {
    const { modal } = this.props;
    if (e.keyCode === 27) {
      this.setState({ modalOpen: false });
      modal(false);
    }
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
    const {
      question, nickname, email, review,
    } = this.state;
    const { item, fetcher } = this.props;
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions';
    const options = {
      url: apiURL,
      method: 'post',
      data: {
        body: question,
        name: nickname,
        email,
        product_id: item.id,
        review,
      },
      headers: { authorization: process.env.API_KEY },
    };
    axios(options).then(() => {
      console.log('question post successful');
    }).catch((err) => {
      console.log('error posting data', err);
    }).then(() => {
      fetcher();
    })
      .catch((err) => {
        console.log('error fetching after post req', err);
      });
  }

  render() {
    const {
      modalOpen, questionError, nicknameError, emailError,
    } = this.state;

    const { item } = this.props;

    return (
      <Modal isOpen={modalOpen} style={style} appElement={document.getElementById('root')}>
        <form id="formContainer">
          <div
            className="x"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { this.handleKeyPress(e); }}
            onClick={this.closeModal}
          >
            X
          </div>
          <h1>ASK YOUR QUESTION</h1>
          <h3>{`About the ${item.name}`}</h3>
          <div className="detailContainer">
            <div className="text1Div">
              <textarea
                className="textArea"
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
              <p className="privacy">For authentication reasons, you will not be emailed</p>
              {!emailError ? null : <p className="error">{emailError}</p>}
            </div>
            <div className="reviewDiv">
              What did you like or dislike about the product?
              <textarea
                className="textArea"
                rows="6"
                cols="60"
                placeholder="Your thoughts..."
                onChange={(e) => { this.setState({ review: e.target.value }); }}
              />
              <div className="buttonDiv">
                <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
                <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}

export default AddQuestion;
