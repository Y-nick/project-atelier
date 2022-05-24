import React, { useState } from 'react';
import leftChevy from '../images/chevron-left.svg';
import rightChevy from '../images/chevron-right.svg';

const ImageView = ({ pic, handleNextImg, handlePrevImg }) => {
  // const [curPic, setPic] = useState(0);

  return (
    <div className="image-view">
      <span onClick={() => handlePrevImg()}><img src={leftChevy} /></span>
      <span>
        <img src={pic} />
      </span>
      <span onClick={()=>handleNextImg()}><img src={rightChevy} /></span>
    </div>
  );
};

export default ImageView;
