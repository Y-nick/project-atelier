import React, { useState } from 'react';
import ImageView from './ImageView.jsx';
import Thumbnails from './Thumbnails.jsx';

const ImageGallery = ({ pics, curPhoto, handleCurPhoto }) => {
  const [style, setStyle] = useState('image-gallery-container');
  const [mainClass, setMainClass] = useState('main-img-container-default');
  const [zoom, setZoom] = useState('main-img');

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

  const handlePicClick = () => {
    if (mainClass === 'main-img-container-default') {
      setMainClass('main-img-container-expanded');
      setStyle('image-gallery-container-expand');
    } else if (zoom === 'main-img') {
      setZoom('main-img-zoomed');
    } else {
      setZoom('main-img');
    }
  };

  const handleExpand = (event) => {
    if (style === 'image-gallery-container') {
      setStyle('image-gallery-container-expand');
      setMainClass('main-img-container-expanded');
      event.stopPropagation();
    } else {
      setStyle('image-gallery-container');
      setMainClass('main-img-container-default');
      setZoom('main-img');
      event.stopPropagation();
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
        mainClass={mainClass}
        zoom={zoom}
        handleNextImg={handleNextImg}
        handlePrevImg={handlePrevImg}
        handleExpand={handleExpand}
        handlePicClick={handlePicClick}
        displayNav={pics.length}
      />
    </div>
  );
};

export default ImageGallery;
