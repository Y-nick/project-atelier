import React, { useState } from 'react';
import ImageView from './ImageView.jsx';
import Thumbnails from './Thumbnails.jsx';

const ImageGallery = ({ pics, curPhoto, handleCurPhoto }) => {
  const [style, setStyle] = useState('image-gallery-container');

  const selectPic = (value) => {
    pics.forEach((pic, index) => {
      if (pic.url === value) {
        handleCurPhoto(index);
      }
    });
  };

  const handleNextImg = () => {
    if (pics[curPhoto + 1]) {
      handleCurPhoto(curPhoto + 1);
    } else {
      handleCurPhoto(0);
    }
  };

  const handlePrevImg = () => {
    if (pics[curPhoto - 1]) {
      handleCurPhoto(curPhoto - 1);
    } else {
      handleCurPhoto(pics.length - 1);
    }
  };

  const handleExpand = () => {
    if (style === 'image-gallery-container') {
      setStyle('image-gallery-container-expand');
    } else {
      setStyle('image-gallery-container');
    }
  };

  return (
    <div className={style}>
      <Thumbnails
        pics={pics}
        selectPic={selectPic}
        curPhoto={curPhoto}
      />
      <ImageView
        pic={pics[curPhoto] && pics[curPhoto].url}
        handleNextImg={handleNextImg}
        handlePrevImg={handlePrevImg}
        handleExpand={handleExpand}
      />
    </div>
  );
};

export default ImageGallery;
