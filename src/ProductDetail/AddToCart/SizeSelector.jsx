import React, { useState } from 'react';
import DropdownItem from './DropdownItem.jsx';


const SizeSelector = ({ SKUs, size, setSize }) => {
  const [open, setOpen] = useState(false);
  console.log('skus', SKUs);
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
          <DropdownItem key={SKU[0]} option={SKU[1].size} setSize={setSize} setOpen={setOpen} />
        ))}
      </div>
      )}
    </div>
  );
};

export default SizeSelector;
