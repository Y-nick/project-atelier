import React from 'react';
import Modal from 'react-modal';

const startState = {
  modalOpen: true,
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
    const { modalOpen } = this.state;
    return (
      <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
        <form id="formContainer">
          <div className="x" onClick={this.closeModal}>x</div>
          <h1>ADD ANSWER</h1>
          <h3>{`About the item_____`}</h3>
          <button className="button" type="button" onClick={this.closeModal}>CLOSE</button>
          <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </Modal>
    );
  }
}

export default AddAnswer;
