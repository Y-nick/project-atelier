import React from 'react';
import leftChevy from '../images/chevron-left.svg';
import rightChevy from '../images/chevron-right.svg';

const ImageView = ({ pic, handleNextImg, handlePrevImg }) => (
  <div className="image-view">

    <div className="left-chevron" onClick={() => handlePrevImg()}><img src={leftChevy} alt="left nav" /></div>

    <div className="main-img-container">
      <img className="main-img" src={pic} alt="Product" />
    </div>

    <div className="right-chevron" onClick={() => handleNextImg()}><img src={rightChevy} alt="right nav" /></div>

  </div>
);

export default ImageView;
