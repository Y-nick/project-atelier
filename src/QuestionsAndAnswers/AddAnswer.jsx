import React from 'react';
import Modal from 'react-modal';
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

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.closeModal = this.closeModal.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
  }

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
      document.getElementById('formContainerAdd').reset();
      this.setState(startState);
      alert('Submission Successful!');
      this.postAnswer();
    } else {
      alert('Please fill out required fields');
      document.getElementById('formContainerAdd').reset();
    }
  }

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
    if (!email.includes('@')) {
      emailError = 'Please enter valid email';
    }

    if (answerError || nicknameError || emailError) {
      this.setState({ answerError, nicknameError, emailError });
      return false;
    }
    return true;
  }

  postAnswer() {
    const { question, nickname, email } = this.state;
    const { item } = this.props;
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions:question_id/answers';
    const options = {
      url: apiURL,
      method: 'post',
      headers: { authorization: "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" },
      params: {
        body: question,
        name: nickname,
        email,
        product_id: item.id,
      },
    };
    const options2 = {
      url: apiURL,
      method: 'get',
      headers: { authorization: "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" },
      params: {
        product_id: item.id,
        page: 1,
        count: 5,
      },
    };
    axios(options).then(() => {
      console.log('question post successful');
    }).catch((err) => {
      console.log('error posting data', err);
    }).then(() => {
      axios(options2).then((data) => {
        this.setState({ newlyPosted: data.data.results });
      }).catch((err) => {
        console.log('error fetching data new posts', err);
      });
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
        <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
          <form id="formContainerAdd">
            <div className="x" onClick={this.closeModal}>x</div>
            <h1>SUBMIT YOUR ANSWER</h1>
            <h3>{`${item.name}: ${details.question_body}`}</h3>
            <div className="answerDiv">
              <textarea
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
              {imageCount <= 5 ? <button type="button" onClick={() => { this.setState({ uploadOpen: !uploadOpen }); }}>UPLOAD IMAGES</button> : null}
              <div className="imageDiv">
                {images.map((image) => (
                  <div>{image.name}</div>
                ))}
              </div>
            </div>
            <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
            <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </Modal>
        <Modal isOpen={uploadOpen} appElement={document.getElementById('root')}>
          <form className="formContainer">
            <div className="x" onClick={() => { this.setState({ uploadOpen: false }); }}>x</div>
            <input type="file" onChange={this.handleUpload} />
          </form>
        </Modal>
      </>
    );
  }
}

export default AddAnswer;
