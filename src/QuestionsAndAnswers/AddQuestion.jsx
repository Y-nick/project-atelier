import React from 'react';
import Modal from 'react-modal';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <Modal isOpen={true} appElement={document.getElementById('root')}>
        ADD A QUESTION
      </Modal>
    )
  }
}

export default AddQuestion;