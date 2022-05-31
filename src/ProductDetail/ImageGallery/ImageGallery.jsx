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

  const handleZoom = (event) => {
    const img = document.getElementsByClassName('main-img-zoomed')[0];
    const container = document.getElementsByClassName('main-img-container-expanded')[0];

    const initX = `${(150 * (event.clientX - container.getBoundingClientRect().left)) / (container.getBoundingClientRect().width) - 75}%`;
    const initY = `${(150 * (event.clientY - container.getBoundingClientRect().top)) / (container.getBoundingClientRect().height) - 75}%`;

    Object.assign(img.style, {
      bottom: initY,
      right: initX,
    });

    container.onmousemove = (e) => {
      const xPos = `${(150 * (e.clientX - container.getBoundingClientRect().left)) / (container.getBoundingClientRect().width) - 75}%`;
      const yPos = `${(150 * (e.clientY - container.getBoundingClientRect().top)) / (container.getBoundingClientRect().height) - 75}%`;

      Object.assign(img.style, {
        bottom: yPos,
        right: xPos,
      });
    };
  };

  const handlePicClick = (event) => {
    if (mainClass === 'main-img-container-default') {
      setMainClass('main-img-container-expanded');
      setStyle('image-gallery-container-expand');
    } else if (zoom === 'main-img') {
      setZoom('main-img-zoomed');
      handleZoom(event);
      setTimeout(() => handleZoom(event), 1);
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
