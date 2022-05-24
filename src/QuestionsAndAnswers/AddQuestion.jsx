import React from 'react';
import Modal from 'react-modal';
import './AddQuestion.css';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
    };

    this.closeModal = this.closeModal.bind(this);
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
          <h1>ASK YOUR QUESTION</h1>
          <h3>{`About the ${item.name}`}</h3>
          <textarea rows="6" cols="60" placeholder="Your Question..." />
          <div className="nicknameDiv">
            What is your nickname?
            <input id="nickname" placeholder="Example: jackson11!" />
            <p className="privacy">For privacy reasons, do not use your full name or email address</p>
          </div>
          <div className="emailDiv">
            *What is your email?
            <input id="email" placeholder="example@outlook.com" />
          </div>

          <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
        </div>
      </Modal>
    );
  }
}

export default AddQuestion;
