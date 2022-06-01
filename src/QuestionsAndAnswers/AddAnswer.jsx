import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './AddAnswer.css';

const startState = {
  modalOpen: true,
  answer: '',
  nickname: '',
  email: '',
  uploadOpen: false,
  imageCount: 0,
  images: [],
  answerError: '',
  nicknameError: '',
  emailError: '',
  newlyPosted: [],
};

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
    // background: '#fff',
    backgroundColor: '#F8F8F8',
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
    WebkitOverflowScrolling: 'scroll',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const style2 = {
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
  },
  content: {
    position: 'absolute',
    top: '100px',
    left: '20%',
    right: '100px',
    bottom: '20%',
    width: '50em',
    height: '50em',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'scroll',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.closeModal = this.closeModal.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // handles escape key form close;
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  // image upload not yet fully functional (Requires image url)
  handleUpload(e) {
    const { images } = this.state;
    images.push(e.target.files[0]);
    this.setState({ uploadOpen: false });
    this.setState({ imageCount: images.length - 1 });
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      document.getElementById('formContainer').reset();
      this.setState(startState);
      alert('Submission Successful!');
      this.postAnswer();
    } else {
      alert('Please fill out required fields');
      document.getElementById('formContainer').reset();
    }
  }

  // function to close on escape key press
  handleKeyPress(e) {
    const { modalFun } = this.props;
    if (e.keyCode === 27) {
      this.setState({ modalOpen: false });
      modalFun(false);
    }
  }

  // passes modal close up to Question component
  closeModal() {
    const { modalFun } = this.props;
    this.setState({ modalOpen: false });
    modalFun(false);
  }

  validate() {
    const { answer, nickname, email } = this.state;
    let answerError = '';
    let nicknameError = '';
    let emailError = '';

    if (answer.length < 5) {
      answerError = 'Please enter a answer';
    }
    if (nickname.length < 2) {
      nicknameError = 'Please enter a valid nickname';
    }
    if (!email.includes('@') || !email.includes('.com')) {
      emailError = 'Please enter valid email';
    }

    if (answerError || nicknameError || emailError) {
      this.setState({ answerError, nicknameError, emailError });
      return false;
    }
    return true;
  }

  postAnswer() {
    const {
      answer, nickname, email, images,
    } = this.state;
    const { fetcher, details } = this.props;
    const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${details.question_id}/answers`;
    const options = {
      url: apiURL,
      method: 'post',
      data: {
        body: answer,
        name: nickname,
        email,
        photos: images,
      },
      headers: { authorization: process.env.API_KEY },
    };

    axios(options).then(() => {
    }).catch((err) => {
      console.log('error posting data', err);
    }).then(() => {
      fetcher();
    });
  }

  render() {
    const {
      modalOpen, uploadOpen, imageCount, images, answerError,
      nicknameError, emailError,
    } = this.state;
    const { item, details } = this.props;
    return (
      <>
        <Modal isOpen={modalOpen} style={style} appElement={document.getElementById('root')}>
          <form id="formContainer">
            (
            <div
              role="button"
              tabIndex={0}
              className="x"
              onClick={this.closeModal}
              onKeyPress={(e) => { this.handleKeyPress(e); }}
            >
              X
            </div>
            )
            <h1>SUBMIT YOUR ANSWER</h1>
            <h3>{`${item.name}: ${details.question_body}`}</h3>
            <div className="text1Div">
              <textarea
                className="textArea"
                placeholder="*Your Answer"
                rows="6"
                cols="60"
                onChange={(e) => { this.setState({ answer: e.target.value }); }}
              />
              {!answerError ? null : <p className="error">{answerError}</p>}
            </div>
            <div className="nicknameDiv">
              *What is your nickname?
              <input
                id="nickname"
                placeholder="Example: jack543!"
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
            <div className="uploadDiv">
              {imageCount <= 5
                ? (
                  <button
                    className="button"
                    type="button"
                    onClick={() => { this.setState({ uploadOpen: !uploadOpen }); }}
                  >
                    UPLOAD IMAGES
                  </button>
                )
                : null}
              <div className="imageDiv">
                {images.map((image) => (
                  <div>{image.name}</div>
                ))}
              </div>
            </div>
            <div className="buttonDiv">
              <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
              <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          </form>
        </Modal>
        <Modal isOpen={uploadOpen} style={style2} appElement={document.getElementById('root')}>
          <form id="formContainer">
            (
            <div
              className="x"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { this.handleKeyPress(e); }}
              onClick={() => { this.setState({ uploadOpen: false }); }}
            >
              )
              EXIT
            </div>
            <input type="file" onChange={this.handleUpload} />
          </form>
        </Modal>
      </>
    );
  }
}

export default AddAnswer;
