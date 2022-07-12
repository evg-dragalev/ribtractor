import React, { useState, useEffect } from 'react';
import printSymbol from './../assets/symbol_02.png';

function extractFonts(componentConfig) {
  return componentConfig.fields.facetValuesList.map((item) => ({
    id: item.sys.id,
    name: item.fields.file.fields.file.fileName.replace('.ttf', ''),
    url: `https:${item.fields.file.fields.file.url}`,
  }));
}

async function loadFontsIntoDom(fonts) {
  const loadPromises = [];
  const fontsSet = document.fonts;
  for (const { name, url } of fonts) {
    const face = new FontFace(name, `url(${url})`);
    loadPromises.push(face.load().then((f) => fontsSet.add(f)));
  }

  return Promise.all(loadPromises);
}

/**
 *
 * @param { fontFamily, icon, schoolText } markupData
 * @returns
 */
function LayoutConstructor({ componentConfig, markupData, setMarkupData }) {
  const [hasFontsLoaded, setHasFontsLoaded] = useState(false);

  const fonts = extractFonts(componentConfig);

  const handleFontSelection = (value) =>
    setMarkupData(Object.assign({}, markupData, { fontFamily: value }));

  const handleSchoolTextUpdate = (value) => {
    setMarkupData(Object.assign({}, markupData, { schoolText: value }));
  };

  useEffect(() => {
    loadFontsIntoDom(fonts)
      .then(() => {
        if (!markupData)
          setMarkupData({
            fontFamily: fonts[0].name,
            schoolText: 'Средняя Школа №1, г. Минска',
          });
      })
      .then(() => setHasFontsLoaded(true))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!hasFontsLoaded && <div className='row'>Loading fonts...</div>}
      {hasFontsLoaded && (
        <fieldset className='row g-3'>
          <legend>{componentConfig.fields.callToActionText}</legend>
          <div className='col-12'>
            {/* markup constructor */}
            <div className='row mb-3'>
              <div className='col-12'>
                <div className='constructor'>
                  <div className='row constructor-content'>
                    <div className='col-2 p-3'>
                      <img
                        src={printSymbol}
                        alt='Print symbol'
                        className='d-block'
                      />
                    </div>
                    <div className='col-10 ps-0'>
                      <div
                        className='constructor-signature'
                        style={{ fontFamily: markupData.fontFamily }}
                      >
                        <div className='constructor-legend-top'>
                          Иванов Иван
                        </div>
                        <div className='constructor-main-text'>
                          Выпускник 2022
                        </div>
                        <div className='constructor-legend-bottom'>
                          {markupData.schoolText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* text for constructor */}
            <div className='row mb-3'>
              <div className='col-12 col-md-6'>
                <label>Название учр. образования:</label>
                <input
                  className='form-control'
                  maxLength={35}
                  type='text'
                  value={markupData.schoolText}
                  onChange={(e) => handleSchoolTextUpdate(e.target.value)}
                />
              </div>
              <div className='col-12 col-md-6'>
                <label>Основной текст:</label>
                <input
                  disabled
                  className='form-control'
                  type='text'
                  value='Выпускник 2022'
                />
              </div>
            </div>
            {/* font selector */}
            <div className='row mb-3 g-2'>
              {fonts.map(({ name, id }) => {
                return (
                  <Option
                    key={id}
                    name={name}
                    inputId={id}
                    isSelected={markupData.fontFamily === name}
                    setSelected={handleFontSelection}
                  />
                );
              })}
            </div>
          </div>
        </fieldset>
      )}
    </>
  );
}

function Option({ name, inputId, isSelected, setSelected }) {
  return (
    <div className='col-12 col-md-6'>
      <div
        className={`tile border border-2 ${
          isSelected ? 'border-success' : 'border-dark'
        }`}
      >
        <div className='tile-content p-2'>
          <div className='cbx'>
            <label>
              <input
                type='radio'
                name='fontFamily'
                id={`fontFamily-${inputId}`}
                value={name}
                checked={isSelected}
                onChange={(e) => setSelected(name)}
              />
              <span style={{ fontFamily: name, fontSize: '30px' }}>
                Выпуск 2022
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutConstructor;
