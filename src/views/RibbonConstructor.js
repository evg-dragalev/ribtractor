import React, { useState } from 'react';
import RibbonColorSelector from '../components/RibbonColorSelector';
import FontColorSelector from '../components/FontColorSelector';
import LayoutConstructor from '../components/LayoutConstructor';

function RibbonConstructor() {
  const [ribbonColor, setRibbonColor] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [markupData, setMarkupData] = useState(null);

  return (
    <>
      {/* select ribbon color component */}
      <div className='container'>
        <RibbonColorSelector
          ribbonColor={ribbonColor}
          setRibbonColor={setRibbonColor}
        />
      </div>
      {/* select font color component */}
      <div className='container'>
        <FontColorSelector
          ribbonColor={fontColor}
          setFontColor={setFontColor}
        />
      </div>
      <div className='container'>
        <LayoutConstructor
          markupData={markupData}
          setMarkupData={setMarkupData}
        />
      </div>
      {/* configure ribbon layout component for girls */}
      {/* configure ribbon layout component for boys */}
      {/* specify list of students component */}
      {/* checkout view component */}
    </>
  );
}

export default RibbonConstructor;
