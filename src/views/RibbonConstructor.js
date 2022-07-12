import React, { useState } from 'react';
import RibbonColorSelector from '../components/RibbonColorSelector';
import FontColorSelector from '../components/FontColorSelector';
import LayoutConstructor from '../components/LayoutConstructor';

import useContentfulConfig from '../customHooks/useContentfulConfig';

function RibbonConstructor() {
  const [ribbonColor, setRibbonColor] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [markupData, setMarkupData] = useState(null);

  const {
    entry: config,
    isLoading,
    isError,
  } = useContentfulConfig('constructorComponent');

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (isError)
    return (
      <div>
        <h1>Ooops... Failed to load configuration</h1>
      </div>
    );
  return (
    <>
      {/* select ribbon color component */}
      <div className='container my-4'>
        <RibbonColorSelector
          componentConfig={config.fields.ribbonColorsListContainer}
          ribbonColor={ribbonColor}
          setRibbonColor={setRibbonColor}
        />
      </div>
      {/* select font color component */}
      <div className='container my-4'>
        <FontColorSelector
          componentConfig={config.fields.fontColorsListContainer}
          ribbonColor={fontColor}
          setFontColor={setFontColor}
        />
      </div>
      <div className='container my-4'>
        <LayoutConstructor
          componentConfig={config.fields.fontsListContainer}
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
