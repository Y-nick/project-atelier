import React from 'react';
import Modal from 'react-modal';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render () {
    return (
      <Modal isOpen={this.state.modalOpen} appElement={document.getElementById('root')}>
        ADD A QUESTION
        <button onClick={this.closeModal}>CLOSE</button>
      </Modal>
    )
  }
}

export default AddQuestion;