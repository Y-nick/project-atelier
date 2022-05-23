import React, { useState } from 'react';

const SizeItem = ({
  curSKU,
  option,
  count,
  setSize,
  setOpen,
  setCount,
  setSKU,
}) => {
  const sizeSelection = (event) => {
    setSize(event.target.textContent);
    setCount(count);
    setSKU(curSKU);
    setOpen();
  };

  return (
    <li className="dropdown-item" onClick={sizeSelection}>
      {option}
    </li>
  );
};

export default SizeItem;
