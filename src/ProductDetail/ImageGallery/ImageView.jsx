import React from 'react';
import leftChevy from '../images/chevron-left.svg';
import rightChevy from '../images/chevron-right.svg';
import fullscreen from '../images/fullscreen.svg';

const ImageView = ({ pic, handleNextImg, handlePrevImg, handleExpand }) => (
  <div className="image-view">

    <div
      className="left-chevron"
      onClick={() => handlePrevImg()}
      onKeyPress={() => handlePrevImg()}
      role="button"
      tabIndex="0"
    >
      <img src={leftChevy} alt="left nav" />
    </div>

    <div className="main-img-container">
      <img className="main-img" src={pic} alt="Product" />

    </div>

    <div
      className="full-size"
      role="button"
      tabIndex="0"
      onClick={() => handleExpand()}
      onKeyPress={() => handleExpand()}
    >
      <img src={fullscreen} alt="Fullscreen" />
    </div>

    <div
      className="right-chevron"
      onClick={() => handleNextImg()}
      onKeyPress={() => handleNextImg()}
      role="button"
      tabIndex="0"
    >
      <img src={rightChevy} alt="right nav" />
    </div>

  </div>
);

export default ImageView;
