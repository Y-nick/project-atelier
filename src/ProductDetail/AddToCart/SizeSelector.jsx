import React, { useState } from 'react';
import SizeItem from './SizeItem.jsx';
import downChevy from '../images/chevron-down.svg';

const SizeSelector = ({
  SKUs,
  size,
  setSize,
  setCount,
  setSKU,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="size-selector">

      <div
        className="dropdown-btn-size"
        onClick={(() => setOpen(!open))}
        onKeyPress={(() => setOpen(!open))}
        role="button"
        tabIndex="0"
      >
        <div>{size || (SKUs[0] && SKUs[0][0] === 'null' ? 'OUT OF STOCK' : 'SELECT SIZE')}</div>
        <div><img src={downChevy} alt="Down Nav" /></div>
      </div>

      {open && (
      <div className="dropdown-content">
        {SKUs.map((SKU) => (

          <SizeItem
            key={SKU[0]}
            curSKU={SKU[0]}
            option={SKU[1].size}
            count={SKU[1].quantity}
            setSize={setSize}
            setOpen={setOpen}
            setCount={setCount}
            setSKU={setSKU}
          />

        ))}
      </div>
      )}
    </div>
  );
};

export default SizeSelector;
