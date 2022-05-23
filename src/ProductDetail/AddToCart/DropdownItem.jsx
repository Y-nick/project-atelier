import React, { useState } from 'react';

const DropdownItem = ({ option, setSize, setOpen }) => {
  const sizeSelection = (event) => {
    setSize(event.target.textContent);
    setOpen();
  };

  return (
    <li className="dropdown-item" onClick={sizeSelection}>
      {option}
    </li>
  );
};

export default DropdownItem;
