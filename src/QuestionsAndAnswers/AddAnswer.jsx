import React from 'react';
import Modal from 'react-modal';
import './AddAnswer.css';

const startState = {
  modalOpen: true,
  answer: '',
  nickname: '',
  email: '',
  uploadOpen: false,
};

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    const { modalFun } = this.props;
    this.setState({ modalOpen: false });
    modalFun(false);
  }

  render() {
    const { modalOpen, uploadOpen } = this.state;
    const { item, details } = this.props;
    return (
      <>
        <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
          <form className="formContainer">
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
            </div>
            <div className="nicknameDiv">
              *What is your nickname?
              <input
                id="nickname"
                placeholder="Example: jack543!"
                onChange={(e) => { this.setState({ nickname: e.target.value }); }}
              />
              {/* {!nicknameError ? null : <p className="error">{nicknameError}</p>} */}
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
              {/* {!emailError ? null : <p className="error">{emailError}</p>} */}
            </div>
            <div className="uploadDiv">
              <button type="button" onClick={() => { this.setState({ uploadOpen: !uploadOpen }); }}>UPLOAD IMAGES</button>
            </div>
            <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
            <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </Modal>
        <Modal isOpen={uploadOpen} appElement={document.getElementById('root')}>
          <input type="file" />
        </Modal>
      </>
    );
  }
}

export default AddAnswer;
