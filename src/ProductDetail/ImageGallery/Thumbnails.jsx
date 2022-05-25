import React, { useState } from 'react';
import './gallery.css';
import upChevy from '../images/chevron-up.svg';
import downChevy from '../images/chevron-down.svg';

const Thumbnails = ({
  pics,
  selectPic,
  curPhoto,
  scrollUp,
  scrollDown,
}) => (
  <div className="thumb-collection">
    <div className="up-chevron" onClick={scrollUp}>
      <img src={upChevy} alt="Up Nav" />
    </div>
    {pics.map((pic) => (
      <div className="thumb-container" key={pic.thumbnail_url} onClick={()=>selectPic(pic.url)}>
        <img className="thumb-img" src={pic.thumbnail_url} alt="Thumbnail" />
        {pics[curPhoto].thumbnail_url === pic.thumbnail_url ? '!' : null}
      </div>
    ))}
    <div className="down-chevron" onClick={scrollDown}>
      <img src={downChevy} alt="Down Nav" />
    </div>
  </div>
);

export default Thumbnails;
