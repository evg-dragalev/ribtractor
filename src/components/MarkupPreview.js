import React from 'react';
import printSymbol from './../assets/symbol_02.png';

function MarkupPreview({ fontFamily, schoolText }) {
  return (
    <div className='constructor'>
      <div className='row constructor-content'>
        <div className='col-2 p-3'>
          <img src={printSymbol} alt='Print symbol' className='d-block' />
        </div>
        <div className='col-10 ps-0'>
          <div
            className='constructor-signature'
            style={{ fontFamily: fontFamily }}
          >
            <div className='constructor-legend-top'>Иванов Иван</div>
            <div className='constructor-main-text'>Выпускник 2022</div>
            <div className='constructor-legend-bottom'>{schoolText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkupPreview;
