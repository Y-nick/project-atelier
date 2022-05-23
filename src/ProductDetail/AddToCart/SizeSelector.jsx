import React, { useState } from 'react';
import SizeItem from './SizeItem.jsx';

const SizeSelector = ({ SKUs, size, setSize, setCount }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(()=> setOpen(!open))}
        role="button">{size || "Select Size"}
      </div>
      {open && (
      <div className="dropdown-content">
        {SKUs.map((SKU) => (
          <SizeItem
            key={SKU[0]}
            option={SKU[1].size}
            count={SKU[1].quantity}
            setSize={setSize}
            setOpen={setOpen}
            setCount={setCount}
          />
        ))}
      </div>
      )}
    </div>
  );
};

export default SizeSelector;
