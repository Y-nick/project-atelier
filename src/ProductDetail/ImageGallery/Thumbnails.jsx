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
  <div>
    <div onClick={scrollUp}>
      <img src={upChevy} />
    </div>
    {pics.map((pic) => (
      <div key={pic.thumbnail_url} onClick={()=>selectPic(pic.url)}>
        <img className="thumb-img" src={pic.thumbnail_url} alt="Thumbnail" />
        {pics[curPhoto].thumbnail_url === pic.thumbnail_url ? '!' : null}
      </div>
    ))}
    <div onClick={scrollDown}>
      <img src={downChevy} />
    </div>
  </div>
);

export default Thumbnails;
