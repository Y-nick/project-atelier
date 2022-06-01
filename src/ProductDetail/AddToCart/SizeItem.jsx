import React from 'react';

const SizeItem = ({
  curSKU,
  option,
  count,
  setSize,
  setOpen,
  setCount,
  setSKU,
  cartError,
  setError,
}) => {
  const sizeSelection = (event) => {
    if (cartError) {
      setError(false);
    }
    setSize(event.target.textContent);
    setCount(count);
    setSKU(curSKU);
    setOpen();
  };

  return (
    <li
      className="dropdown-item"
      onClick={sizeSelection}
      onKeyPress={sizeSelection}
      role="menuitem"
      tabIndex="0"
    >
      {option}
    </li>
  );
};

export default SizeItem;
