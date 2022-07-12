import './../css/checkbox.css';
import './../css/tile.css';

import React from 'react';

function extractColors(componentConfig) {
  return componentConfig.fields.facetValuesList.map((item) => ({
    id: item.sys.id,
    label: item.fields.label,
    image: {
      url: `https:${item.fields.image.fields.file.url}`,
      alt: item.fields.image.fields.title,
    },
  }));
}

function RibbonColorSelector({ componentConfig, ribbonColor, setRibbonColor }) {
  return (
    <fieldset className='row g-3'>
      <legend>
        <h3>{componentConfig.fields.callToActionText}</h3>
      </legend>
      {extractColors(componentConfig).map((item) => {
        return (
          <Option
            key={item.id}
            {...item}
            isSelected={ribbonColor === item.label}
            setSelected={setRibbonColor}
          />
        );
      })}
    </fieldset>
  );
}

function Option({ id, label, image, isSelected, setSelected }) {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <div
        className={`tile tile--square border border-2 ${
          isSelected ? 'border-success' : 'border-dark'
        }`}
      >
        <div className='tile-content p-3'>
          <img src={image.url} alt={`Цвет ленты: ${image.alt}`} />

          <div className='cbx cbx--onborder'>
            <label>
              <input
                type='radio'
                name='ribbonColor'
                id={`ribbonColor${id}`}
                value={label}
                onChange={(e) => setSelected(label)}
              />
              <span>{label}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RibbonColorSelector;
