import React from 'react';

const QuantityItem = ({ option, setQuantity, setOpen }) => {
  const QuantitySelection = () => {
    setQuantity(option);
    setOpen();
  };

  return (
    <li
      className="dropdown-item"
      id="quantity-item"
      onClick={QuantitySelection}
      onKeyPress={QuantitySelection}
      role="menuitem"
      tabIndex="0"
    >
      {option}
    </li>
  );
};

export default QuantityItem;
