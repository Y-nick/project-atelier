import React from 'react';

class WriteReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  clickHandlerClose = (e) => {
    this.props.func(false);
  };

  render() {
    return (
      <div className="modalBackground">
        <div className="modal">
          <button type="button" onClick={this.clickHandlerClose}> X </button>
          <div className="title">
            <h1>Please Write a Review</h1>
          </div>
          <div className="body">This is the body</div>
          <div className="footer">This is the footer</div>
        </div>
      </div>
    );
  }
}
export default WriteReviewModal;
