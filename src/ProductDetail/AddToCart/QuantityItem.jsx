import React from 'react';

const QuantityItem = ({ option, setQuantity, setOpen }) => {
  const QuantitySelection = () => {
    setQuantity(option);
    setOpen();
  };

  return (
    <li className="dropdown-item" onClick={QuantitySelection}>
      {option}
    </li>
  );
};

export default QuantityItem;
