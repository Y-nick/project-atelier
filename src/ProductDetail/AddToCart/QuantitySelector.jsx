import React, { useState } from 'react';
import QuantityItem from './QuantityItem.jsx';

const QuantitySelector = ({ quantity, stockCount, setQuantity }) => {
  const [open, setOpen] = useState(false);

  let curStock = [];
  for (let i = 0; i < stockCount; i += 1) {
    curStock.push(i + 1);
  }
  if (curStock.length > 15) {
    curStock = curStock.slice(0, 15);
  }

  return (
    <div className="quantity-selector">
      <div
        className="dropdown-btn"
        onClick={(() => setOpen(!open))}
      >
        {quantity || "Select Quantity"}
      </div>
      {open && (
      <div className="dropdown-content">
        {curStock.map((num) => (
          <QuantityItem
            key={num}
            option={num}
            setQuantity={setQuantity}
            setOpen={setOpen}
          />
        ))}
      </div>
      )}
    </div>
  );
};

export default QuantitySelector;
