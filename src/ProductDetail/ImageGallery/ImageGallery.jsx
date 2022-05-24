import React from 'react';
import ImageView from './ImageView.jsx';
import Thumbnails from './Thumbnails.jsx';

const ImageGallery = ({ pics, curPhoto, handleCurPhoto }) => {
  const selectPic = (value) => {
    // pics.forEach(pic, index)(if pic.url === value)
    //handleCurPhoto = index
    console.log('value', value);
  };

  const handleNextImg = () => {
    if (pics[curPhoto + 1]) {
      handleCurPhoto(curPhoto + 1);
    }
  };

  const handlePrevImg = () => {
    if (pics[curPhoto - 1]) {
      handleCurPhoto(curPhoto - 1);
    }
  };

  return (
    <div>
      <Thumbnails pics={pics} selectPic={selectPic} />
      <ImageView
        pic={pics[curPhoto] && pics[curPhoto].url}
        handleNextImg={handleNextImg}
        handlePrevImg={handlePrevImg}
      />
    </div>
  );
};

export default ImageGallery;
