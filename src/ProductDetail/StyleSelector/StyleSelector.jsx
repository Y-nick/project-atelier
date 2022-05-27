import React from 'react';
import './styleSelect.css';
import okCheck from '../images/ok-check.svg';

const StyleSelector = ({ curStyle, styles, handleStyle }) => (
  <div className="style-selector-container">

    <div className="style-description">
      STYLE
      {' > '}
      <span className="current-style">{curStyle.name}</span>
    </div>

    <div className="style-grid-container">
      {styles.map((style) => (

        <div
          className="style-child"
          key={style.name}
          onClick={() => handleStyle(style)}
          onKeyPress={() => handleStyle(style)}
          role="button"
          tabIndex="0"
        >
          {style.photos[0].thumbnail_url === null ? (
            <div>
              <div>{style.name}</div>
            </div>
          )
            : (
              <div className="thumb-check">
                <img className="style-thumb" src={style.photos[0].thumbnail_url} alt="style thumbnail" />
              </div>
            )}

          {style.name === curStyle.name
            ? <div className="check"><img src={okCheck} alt="selection check" /></div>
            : null}

        </div>
      ))}
    </div>
  </div>
);

export default StyleSelector;
