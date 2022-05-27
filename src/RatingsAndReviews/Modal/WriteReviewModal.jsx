import React from 'react';
import Modal from './Modal.css';
import Chars from './Chars.jsx';

class WriteReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  clickHandlerClose = () => {
    const { func } = this.props;
    func(false);
  };

  render() {
    const { meta } = this.props;
    const charArray = Object.keys(meta.characteristics);
    // console.log(charArray);
    // console.log(meta);
    return (
      <div styles={Modal} className="modalBackground">
        <div className="modalContainer">
          <button className="xbutton" type="button" onClick={this.clickHandlerClose}> X </button>
          <div className="title">
            <h1>Write your Review</h1>
            <h3>About the (product name here)</h3>
          </div>
          <form className="formGrid">
            <div className="stars">
              Stars:
              <label>
                <input
                  type="text"
                />
              </label>
            </div>
            <div className="reco">
              Do you recommmend?
              <label>
                Yes
                <input
                  type="radio"
                />
                No
                <input
                  type="radio"
                />
              </label>
            </div>
            <div className="chars">
              Characteristics:
              {charArray.map((char) => {
                <Chars name={char} />;
              })}
            </div>
            <div className="sum">
              Summary:
              <label>
                <input
                  type="text"
                  maxLength="60"
                  placeholder="Example: Best purchase ever!"
                />
              </label>
            </div>
            <div className="rbody">
              Review Body:
              <label>
                <input
                  type="text"
                  maxLength="1000"
                  minLength="50"
                  placeholder="Why did you like the product or not?"
                />
              </label>
              <div>
                Minimum charters left[##]
              </div>
            </div>
            <div className="uphoto">
              Upload Photos:
              <label>
                <input
                  type="image"
                />
              </label>
            </div>
            <div className="nname">
              Nick Name:
              <label>
                <input
                  type="text"
                  placeholder="Example: jackson11!"
                  maxLength="60"
                />
              </label>
              <div>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div className="email">
              Email:
              <label>
                <input
                  type="text"
                />
              </label>
            </div>
            <button className="sbutton" type="button">Submit Review</button>
          </form>
        </div>
      </div>
    );
  }
}
export default WriteReviewModal;
