import React from 'react';
import leftChevy from '../images/chevron-left.svg';
import rightChevy from '../images/chevron-right.svg';
import fullscreen from '../images/fullscreen.svg';

const ImageView = ({
  pic,
  handleNextImg,
  handlePrevImg,
  handleExpand,
  mainClass,
  handlePicClick,
  zoom,
}) => (
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

    <div
      className={mainClass}
      role="button"
      tabIndex="-1"
      onClick={(event) => handlePicClick(event)}
      onKeyPress={(event) => handlePicClick(event)}
    >

      {pic === null ? <div>NO IMAGES FOUND</div> : <img className={zoom} src={pic} alt="Product" />}

      <div
        className="full-size"
        role="button"
        tabIndex="0"
        onClick={(event) => handleExpand(event)}
        onKeyPress={(event) => handleExpand(event)}
      >
        <img src={fullscreen} alt="Fullscreen" />
      </div>

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
