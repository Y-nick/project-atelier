import React, { useState } from 'react';

const SizeItem = ({ option, count, setSize, setOpen, setCount }) => {
  const sizeSelection = (event) => {
    setSize(event.target.textContent);
    setCount(count);
    setOpen();
  };

  return (
    <li className="dropdown-item" onClick={sizeSelection}>
      {option}
    </li>
  );
};

export default SizeItem;
