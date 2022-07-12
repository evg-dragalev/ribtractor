import './../css/checkbox.css';
import './../css/tile.css';

import React from 'react';

function extractOptions(componentConfig) {
  return componentConfig.fields.facetValuesList.map((item) => ({
    id: item.sys.id,
    label: item.fields.label,
    image: {
      url: `https:${item.fields.image.fields.file.url}`,
      alt: item.fields.image.fields.file.title,
    },
  }));
}

function FontColorSelector({ componentConfig, fontColor, setFontColor }) {
  return (
    <fieldset className='row g-3'>
      <legend>
        <h3>{componentConfig.fields.callToActionText}</h3>
      </legend>
      {extractOptions(componentConfig).map((item) => {
        return (
          <Option
            key={item.id}
            {...item}
            isSelected={fontColor === item.label}
            setSelected={setFontColor}
          />
        );
      })}
    </fieldset>
  );
}

function Option({ label, image, id, isSelected, setSelected }) {
  return (
    <div className='col-12'>
      <div
        className={`tile border border-2 ${
          isSelected ? 'border-success' : 'border-dark'
        }`}
      >
        <div className='d-flex'>
          <div className='col-6 p-3'>
            <div className='cbx'>
              <label>
                <input
                  type='radio'
                  name='fontColor'
                  id={`fontColor-${id}`}
                  value={label}
                  onChange={(e) => setSelected(label)}
                />
                <span>{label}</span>
              </label>
            </div>
          </div>
          <div className='col-6'>
            <div className='img-wrapper--cut-height img-wrapper--fade-from-left'>
              <img src={image.url} alt={image.alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontColorSelector;
