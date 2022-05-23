import React from 'react';

const StyleSelector = ({ curStyle, styles, handleStyle }) => (
  <div>
    <div>
      STYLE
      {'> '}
      {curStyle.name}
    </div>
    <div>
      {styles.map((style) => (
        <div className="styleThumb" key={style.name} onClick={()=>handleStyle(style)}>
          PICT
          {style.name}
        </div>
      ))}
    </div>
  </div>
);

export default StyleSelector;
