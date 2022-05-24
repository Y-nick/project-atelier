import React, { useState } from 'react';

const ImageView = ({ pic, handleNextImg, handlePrevImg }) => {
  // const [curPic, setPic] = useState(0);

  return (
    <div className="image-view">
      <span onClick={() => handlePrevImg()}>{'<'}</span>
      <span>
        <img src={pic} />
      </span>
      <span onClick={()=>handleNextImg()}>{'>'}</span>
    </div>
  );
};

export default ImageView;
