import React from 'react';
import './styleSelect.css';

const StyleSelector = ({ curStyle, styles, handleStyle }) => (
  <div className="style-selector-container">
    <div>
      STYLE
      {'> '}
      {curStyle.name}
    </div>
    <div>
      {styles.map((style) => (
        <div className="style-child" key={style.name} onClick={()=>handleStyle(style)}>
          <img className="style-thumb" src={style.photos[0].thumbnail_url} />
          {style.name === curStyle.name ? '!' : null}
        </div>
      ))}
    </div>
  </div>
);

export default StyleSelector;
