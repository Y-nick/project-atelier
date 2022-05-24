import React, { useState } from 'react';
import './gallery.css';

const Thumbnails = ({ pics, selectPic, curPhoto, scrollUp, scrollDown, sliceStart }) => {
  // let sliceStart = 0;
  // if (curPhoto === 0) {
  //   sliceStart = 0;
  // }

  // const scrollUp = () => {
  //   if (sliceStart > 0) {
  //     sliceStart -= 1;
  //   }
  // };

  // const scrollDown = () => {
  //   if (sliceStart < pics.length - 2) {
  //     sliceStart += 1;
  //   }
  // };
  console.log(sliceStart);
  return (
    <div>
      <div onClick={scrollUp}>
        {'^'}
      </div>
      {pics.map((pic) => (
        <div key={pic.thumbnail_url} onClick={()=>selectPic(pic.url)}>
          <img className="thumb-img" src={pic.thumbnail_url} alt="Thumbnail" />
          {pics[curPhoto].thumbnail_url === pic.thumbnail_url ? '!' : null}
        </div>
      ))}
      <div onClick={scrollDown}>
        {'+'}
      </div>
    </div>
  );
};

export default Thumbnails;
