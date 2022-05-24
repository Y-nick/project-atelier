import React from 'react';

const Thumbnails = ({ pics, selectPic }) => (
  <div>
    <div>
      {'^'}
    </div>
    {pics.map((pic) => <div key={pic.url} onClick={(event)=>selectPic(event.target)}>{pic.url}</div>)}
    <div>
      {'+'}
    </div>
  </div>
);

export default Thumbnails;
