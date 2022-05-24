import React from 'react';
import Modal from 'react-modal';
import './AddQuestion.css';

const startState = {
  question: '',
  nickname: '',
  email: '',
  review: '',
  modalOpen: true,
};

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.closeModal = this.closeModal.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(startState);
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
    if (!email.includes('@')) {
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

  render() {
    const { modalOpen } = this.state;
    const { item } = this.props;
    return (
      <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
        <div className="formContainer">
          <div className="x" onClick={this.closeModal}>x</div>
          <h1>ASK YOUR QUESTION</h1>
          <h3>{`About the ${item.name}`}</h3>
          <div className="questionDiv">
            <textarea rows="6" cols="60" placeholder="*Your Question..."
              onChange={(e) => { this.setState({ question: e.target.value }); }}
            />
          </div>
          <div className="nicknameDiv">
            *What is your nickname?
            <input
              id="nickname"
              placeholder="Example: jackson11!"
              onChange={(e) => { this.setState({ nickname: e.target.value }); }}
            />
            <p className="privacy">For privacy reasons, do not use your full name or email address</p>
          </div>
          <div className="emailDiv">
            *What is your email?
            <input
              id="email"
              placeholder="example@outlook.com"
              onChange={(e) => { this.setState({ email: e.target.value }); }}
            />
          </div>
          <div className="review">
            What did you like or dislike about the product?
            <textarea
              rows="6"
              cols="60"
              placeholder="Your thoughts..."
              onChange={(e) => { this.setState({ review: e.target.value }); }}
            />
          </div>
          <div>
            <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
            <button className="button" type="button" onClick={this.handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddQuestion;
