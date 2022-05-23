import React from 'react';
import Modal from 'react-modal';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
        ADD A QUESTION
        <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
      </Modal>
    );
  }
}

export default AddQuestion;
