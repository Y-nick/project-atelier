import React from 'react';
import Modal from './Modal.css';

class WriteReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  clickHandlerClose = () => {
    this.props.func(false);
  };

  render() {
    return (
      <div styles={Modal} className="modalBackground">
        <div className="modalContainer">
          <button className="xbutton" type="button" onClick={this.clickHandlerClose}> X </button>
          <div className="title">
            <h1>Please Write a Review</h1>
          </div>
          <div className="body">
            Inputs
            <form>
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
            </form>
          </div>
          <button type="button">Submit Review</button>
        </div>
      </div>
    );
  }
}
export default WriteReviewModal;
