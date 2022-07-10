import './../css/checkbox.css';
import './../css/tile.css';

import ribbonColor from './../assets/fontColor_DSC08355.jpg';

import React from 'react';

const options = [
  {
    id: 'gold',
    label: 'Золотая фольга',
    img: 'https://lh6.googleusercontent.com/XyOxs9t0zfSv0kWfDweXyDR-yn89cJwaQFstfe8PAdfz5GDGvDxMS2wOBKk1XwmQUm5yGH-MYpfz5KUVm6BM7acr7y1U0Ay_2B9lb_NRW6jrdSC7wxGswL2QBKkey-3v=w260',
  },
  {
    id: 'silver',
    label: 'Серебрянная фольга',
    img: 'https://lh3.googleusercontent.com/kS0XU8bJGavtHnyrUiqi33ruNDZxsFLaP2FxBL0DPyKANUMr8P9rrU8-zr_3wXdAkEOhfTz6SpAgC34-US_uhLbG7AnipeOAjdkyhWY1hpPUif1ivLsm_5PLBIt78tca=w260',
  },
  {
    id: 'red',
    label: 'Красная фольга',
    img: 'https://lh4.googleusercontent.com/s3etyLFEDqxHK8d5p2fgyoNrk_Dv2D4j9jTsS3vWaeUeFO13TbXrbsF-VQv3oZ_sKDCBCmj-_62xTbp_t_qoUZyYdym5vO8Cz-saDf2qgsBTmH5-Uz8He-DXdzaW2Asz=w260',
  },
  {
    id: 'blue',
    label: 'Синяя фольга',
    img: 'https://lh5.googleusercontent.com/921FNhDsez8DsGi3yuD6bx-Y5BjcRK3NmLZjQQPNuoQCPhmrmBGgShjtMGeYK4vOqZ46Ft3aABlzBICsJO9YuW4Ep_ie-h5IgLgPJVKLGG5FltqPPWMViNV0YudN9sl2=w260',
  },
  {
    id: 'blackMate',
    label: 'Черный матовый',
    img: 'https://lh4.googleusercontent.com/yzzkG7xPSTn56SMb4FwM1wgM-kuP_mfI_1DMs1tbWC7g2vbGp6RSoD9s73A53TVRTwPXVhaelEnLu51kRld7T9sUSDlBcO23i2y1VOiLndowLltfQBq3GfHxxLYaDWMx=w260',
  },
  {
    id: 'rainbow',
    label: 'Радужная печать',
    img: 'https://lh3.googleusercontent.com/X6pHdYSg6JifbRk9Iy6GGhBHf2cs58cuHCbmYIOR6Sgah9I-x9BmgJzpjoBsx8V_GUUfxEYr3dYqJ62sn0cHVIL8f5IvaksebVEsIMqD26mYXBgLFbEwcrm2RHTg5FoOtA=w260',
  },
];

// options.forEach((i) => (i.img = ribbonColor));

function FontColorSelector(fontColor, setFontColor) {
  return (
    <fieldset className='row g-0'>
      <legend>
        <h3>Выберите цвет нанесения</h3>
      </legend>
      {options.map((item) => {
        return (
          <Option
            key={item.id}
            {...item}
            inputId={item.id}
            isSelected={fontColor === item.label}
            setSelected={setFontColor}
          />
        );
      })}
    </fieldset>
  );
}

function Option({ label, img, inputId, isSelected, setSelected }) {
  return (
    <div className='tile col-12'>
      <div
        className={`border border-2 m-2 ${
          isSelected ? 'border-success' : 'border-dark'
        }`}
      >
        <div className='row'>
          <div className='col-6 p-3'>
            <div className='cbx'>
              <label>
                <input
                  type='radio'
                  name='ribbonColor'
                  id={`ribbonColor${inputId}`}
                  value={label}
                  onChange={(e) => setSelected(label)}
                />
                <span>{label}</span>
              </label>
            </div>
          </div>
          <div className='col-6'>
            <div className='parallax img-wrapper--cut-height img-wrapper--fade-from-left'>
              <img src={img} alt={`Нанесение: ${label}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontColorSelector;
