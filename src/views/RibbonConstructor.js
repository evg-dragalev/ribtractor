import React, { useState } from 'react';
import RibbonColorSelector from '../components/RibbonColorSelector';
import FontColorSelector from '../components/FontColorSelector';

function RibbonConstructor() {
  const [ribbonColor, setRibbonColor] = useState(null);
  const [fontColor, setFontColor] = useState(null);

  return (
    <>
      <div>This is RibbonConstructor</div>
      {/* select ribbon color component */}
      <div className='container'>
        <RibbonColorSelector
          ribbonColor={ribbonColor}
          setRibbonColor={setRibbonColor}
        />
      </div>
      <div className='container'>
        <FontColorSelector
          ribbonColor={fontColor}
          setRibbonColor={setFontColor}
        />
      </div>
      {/* select ribbon color component */}
      <div className='container'>
        <RibbonColorSelector
          ribbonColor={ribbonColor}
          setRibbonColor={setRibbonColor}
        />
      </div>
      {/* select font color component */}
      {/* configure ribbon layout component for girls */}
      {/* configure ribbon layout component for boys */}
      {/* specify list of students component */}
      {/* checkout view component */}
    </>
  );
}

export default RibbonConstructor;
