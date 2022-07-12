import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkupPreview from '../components/MarkupPreview';
import useContentfulAsset from '../customHooks/useContentfulAsset';
import useFetch from '../customHooks/useFetch';
import printSymbol from './../assets/symbol_02.png';

const markupData = {
  id: 2,
  schoolName: 'Школа №2',
  fontColor: '4tGTvkXhXFyGinoYRLrZVS',
  fontFamily: '4gtlKJ2bS05dli0rI1UNx4',
  ribbonColor: '5xfP6eS2uQZt9BCCRihMu6',
};

function Markup() {
  const { id } = useParams();
  const { data: markupData, isLoading } = useFetch(
    `http://localhost:8000/markups/${id}`
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-3'>
      <h3>Макет {id}</h3>
      <MarkupContent markupData={markupData} />
    </div>
  );
}

function MarkupContent({ markupData, id }) {
  const { asset: fontAssetData } = useContentfulAsset(markupData.fontFamily);
  const {
    asset: fontColorAssetData,
    isError: fontColorError,
    isLoading: fontColorFetching,
  } = useContentfulAsset(markupData.fontColor);
  const {
    asset: ribbonAssetData,
    isError: ribbonError,
    isLoading: ribbonFetching,
  } = useContentfulAsset(markupData.ribbonColor);

  const [fontName, setFontName] = useState(null);

  useEffect(() => {
    if (fontAssetData) {
      const fontName = fontAssetData.fields.file.fileName.replace('.ttf', '');
      const face = new FontFace(
        fontName,
        `url(https:${fontAssetData.fields.file.url})`
      );
      face
        .load()
        .then(() => document.fonts.add(face))
        .then(() => setFontName(fontName));
    }
  }, [fontAssetData]);

  useEffect(() => {
    console.log('ribbonAssetData', ribbonAssetData);
  }, [ribbonAssetData]);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-sm-4'>
          {!ribbonFetching && (
            <RibbonColor
              image={{
                url: `https:${ribbonAssetData.fields.file.url}`,
                alt: ribbonAssetData.fields.title,
              }}
              label={ribbonAssetData.fields.title}
            />
          )}
        </div>
        <div className='col-12 col-sm-8'>
          {!fontColorFetching && (
            <FontColor
              image={{
                url: `https:${fontColorAssetData.fields.file.url}`,
                alt: fontColorAssetData.fields.title,
              }}
              label={fontColorAssetData.fields.title}
            />
          )}
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12'>
          <div className='border border-2 border-dark'>
            {fontName && (
              <MarkupPreview
                fontFamily={fontName}
                schoolText={markupData.schoolName}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function RibbonColor({ image, label }) {
  return (
    <div className='tile tile--square border border-2 border-dark'>
      <div className='tile-content p-3'>
        <img src={image.url} alt={`Цвет ленты: ${image.alt}`} />

        <div
          style={{
            position: 'absolute',
            top: '-13px',
            left: '0',
            backgroundColor: '#fff',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

function FontColor({ image, label }) {
  return (
    <div className='tile border border-2 border-dark h-100'>
      <div className='d-flex h-100'>
        <div className='col-6 p-3 align-self-center'>{label}</div>
        <div className='col-6'>
          <div className='img-wrapper--cut-height img-wrapper--fade-from-left'>
            <img src={image.url} alt={image.alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markup;
