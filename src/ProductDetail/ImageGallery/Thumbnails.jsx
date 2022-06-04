import React, { useState, useMemo } from 'react';
import './gallery.css';
import upChevy from '../images/chevron-up.svg';
import downChevy from '../images/chevron-down.svg';
import horizontalLine from '../images/horizontal-line.svg';

const Thumbnails = ({ pics, selectPic, curPhoto }) => {
  const [thumbsArr, updateThumbs] = useState(pics);

  useMemo(() => {
    updateThumbs(pics);
  }, [pics]);

  const scrollUp = () => {
    const newOrder = [];
    thumbsArr.forEach((thumb, index) => {
      const possIndex = index - 1;
      const newIndex = possIndex < 0 ? pics.length - 1 : possIndex;
      newOrder[newIndex] = thumb;
    });
    updateThumbs(newOrder);
  };

  const scrollDown = () => {
    const newOrder = [];
    thumbsArr.forEach((thumb, index) => {
      const possIndex = index + 1;
      const newIndex = possIndex > pics.length - 1 ? 0 : possIndex;
      newOrder[newIndex] = thumb;
    });
    updateThumbs(newOrder);
  };

  return (
    <div className="thumb-collection">

      {thumbsArr.length < 5 ? null : (
        <div
          className="up-chevron"
          onClick={scrollUp}
          onKeyPress={scrollUp}
          role="button"
          tabIndex="0"
        >
          <img src={upChevy} alt="Up Nav" />
        </div>
      )}

      {thumbsArr.map((pic) => (

        <div
          className="thumb-container"
          key={pic.thumbnail_url}
          onClick={() => selectPic(pic.url)}
          onKeyPress={() => selectPic(pic.url)}
          role="button"
          tabIndex="0"
        >

          <div className="thumb-selection-wrapper">
            {pic.thumbnail_url && <img className="thumb-img" src={pic.thumbnail_url} alt="Thumbnail" />}
          </div>

          {pics[curPhoto].thumbnail_url === pic.thumbnail_url
            && <div className="horizontal-line"><img src={horizontalLine} alt="horizontal line" /></div>}

        </div>
      )).filter((thumb, idx) => idx < 4)}

      {thumbsArr.length > 5 && (
        <div
          className="down-chevron"
          onClick={scrollDown}
          onKeyPress={scrollDown}
          role="button"
          tabIndex="0"
        >
          <img src={downChevy} alt="Down Nav" />
        </div>
      )}

    </div>
  );
};

export default Thumbnails;
