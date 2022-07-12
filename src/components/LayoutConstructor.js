import React, { useState, useEffect } from 'react';
import printSymbol from './../assets/symbol_02.png';
import fontManuscript from './../assets/fonts/Manuscript.ttf';
import fontVivaldiD from './../assets/fonts/VivaldiD CL.ttf';

const fonts = [
  {
    id: 1,
    name: 'Manuscript',
    src: fontManuscript,
  },
  {
    id: 2,
    name: 'VivaldiD CL',
    src: fontVivaldiD,
  },
];

async function loadFontsIntoDom(fonts) {
  const loadPromises = [];
  const fontsSet = document.fonts;
  for (const { name, src } of fonts) {
    const face = new FontFace(name, `url(${src.replace(' ', '\\ ')})`);
    loadPromises.push(face.load().then((f) => fontsSet.add(f)));
  }

  return Promise.all(loadPromises);
}

/**
 *
 * @param { fontFamily, icon, schoolText } markupData
 * @returns
 */
function LayoutConstructor({ markupData, setMarkupData }) {
  const [hasFontsLoaded, setHasFontsLoaded] = useState(false);

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

  useEffect(() => {
    console.log(markupData);
  }, [markupData]);

  return (
    <>
      {!hasFontsLoaded && <div className='row'>Loading fonts...</div>}
      {hasFontsLoaded && (
        <fieldset className='row g-3'>
          <legend>Настройте ваш макет</legend>
          <div className='col-12'>
            <div className='row mb-3'>
              <div className='col-12' style={{ overflowX: 'scroll' }}>
                <div className='constructor'>
                  <div className='row'>
                    <div className='col-2'>
                      <img src={printSymbol} alt='Print symbol' />
                    </div>
                    <div className='col-10'>
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
