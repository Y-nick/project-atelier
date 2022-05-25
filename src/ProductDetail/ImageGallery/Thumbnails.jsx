import React from 'react';
import './gallery.css';
import upChevy from '../images/chevron-up.svg';
import downChevy from '../images/chevron-down.svg';
import horizontalLine from '../images/horizontal-line.svg';

const Thumbnails = ({
  pics,
  selectPic,
  curPhoto,
  scrollUp,
  scrollDown,
}) => (
  <div className="thumb-collection">

    <div
      className="up-chevron"
      onClick={scrollUp}
      onKeyPress={scrollUp}
      role="button"
      tabIndex="0"
    >
      <img src={upChevy} alt="Up Nav" />
    </div>

    {pics.map((pic) => (

      <div
        className="thumb-container"
        key={pic.thumbnail_url}
        onClick={() => selectPic(pic.url)}
        onKeyPress={() => selectPic(pic.url)}
        role="button"
        tabIndex="0"
      >

        <div className="thumb-selection-wrapper">
          <img className="thumb-img" src={pic.thumbnail_url} alt="Thumbnail" />
        </div>

        {pics[curPhoto].thumbnail_url === pic.thumbnail_url ? <div className="horizontal-line"><img src={horizontalLine} alt="horizontal line" /></div> : null}

      </div>
    ))}

    <div
      className="down-chevron"
      onClick={scrollDown}
      onKeyPress={scrollDown}
      role="button"
      tabIndex="0"
    >
      <img src={downChevy} alt="Down Nav" />
    </div>

  </div>
);

export default Thumbnails;
