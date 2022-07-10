import './../css/checkbox.css';
import './../css/tile.css';

import React, { useEffect } from 'react';

const options = [
  {
    label: 'Белый',
    img: 'https://lh3.googleusercontent.com/TpYqnML0jXq_M9S4a_Ar-mrlIrd2CYwvD_eAEuesZ2f6Nf7JUE3d2y8rhbj5oUMnJGnNxu6PQeUxi4dOd-srPB51FPoB3ABPVIt4CzkBwmLaTf5IDxUey_0rvk-g1o-R=w260',
  },
  {
    label: 'Темно-красный',
    img: 'https://lh3.googleusercontent.com/G88uvNUGu6cKAN6-NohmqAdtifoYFk4Lje4hOca0CY7ZGOdKDNGMq10I-w6sc8pzgOTepVfyTu5f0DaPFUhh7Fk1DAGXcFzZUdd-ZI3JzeS5ozDLQMTwnghqkkF-HQPigA=w260',
  },
  {
    label: 'Фиолетовый',
    img: 'https://lh6.googleusercontent.com/5UcJMIt2RoJWr0MYf3NCIvCXu4jHwzQxIGt6Pt-O5zeZOqZ_Xq-0o8sFBedg7ByBX2Rv_OZaPfPWCPec4Sg3TR2IYy9rF11DgKSHVFUT7N_UVQUtcqJ7EnZ--mEC5Ou8Rw=w260',
  },
  {
    label: 'Темно-синий',
    img: 'https://lh6.googleusercontent.com/T2zUFNzLnGioZgPiy8NIdGcn0OxufAsU_YUasBuFmeWcTwNDABqggJlIL0Zyr00up666osDVA3i0ujXhcWD048muJCNzNT6QVGnydd8uRIvPDZkO7_tAOE3cW5jktLWG3A=w260',
  },
  {
    label: 'Белый',
    img: 'https://lh3.googleusercontent.com/TpYqnML0jXq_M9S4a_Ar-mrlIrd2CYwvD_eAEuesZ2f6Nf7JUE3d2y8rhbj5oUMnJGnNxu6PQeUxi4dOd-srPB51FPoB3ABPVIt4CzkBwmLaTf5IDxUey_0rvk-g1o-R=w260',
  },
  {
    label: 'Темно-красный',
    img: 'https://lh3.googleusercontent.com/G88uvNUGu6cKAN6-NohmqAdtifoYFk4Lje4hOca0CY7ZGOdKDNGMq10I-w6sc8pzgOTepVfyTu5f0DaPFUhh7Fk1DAGXcFzZUdd-ZI3JzeS5ozDLQMTwnghqkkF-HQPigA=w260',
  },
  {
    label: 'Фиолетовый',
    img: 'https://lh6.googleusercontent.com/5UcJMIt2RoJWr0MYf3NCIvCXu4jHwzQxIGt6Pt-O5zeZOqZ_Xq-0o8sFBedg7ByBX2Rv_OZaPfPWCPec4Sg3TR2IYy9rF11DgKSHVFUT7N_UVQUtcqJ7EnZ--mEC5Ou8Rw=w260',
  },
  {
    label: 'Темно-синий',
    img: 'https://lh6.googleusercontent.com/T2zUFNzLnGioZgPiy8NIdGcn0OxufAsU_YUasBuFmeWcTwNDABqggJlIL0Zyr00up666osDVA3i0ujXhcWD048muJCNzNT6QVGnydd8uRIvPDZkO7_tAOE3cW5jktLWG3A=w260',
  },
  {
    label: 'Белый',
    img: 'https://lh3.googleusercontent.com/TpYqnML0jXq_M9S4a_Ar-mrlIrd2CYwvD_eAEuesZ2f6Nf7JUE3d2y8rhbj5oUMnJGnNxu6PQeUxi4dOd-srPB51FPoB3ABPVIt4CzkBwmLaTf5IDxUey_0rvk-g1o-R=w260',
  },
  {
    label: 'Темно-красный',
    img: 'https://lh3.googleusercontent.com/G88uvNUGu6cKAN6-NohmqAdtifoYFk4Lje4hOca0CY7ZGOdKDNGMq10I-w6sc8pzgOTepVfyTu5f0DaPFUhh7Fk1DAGXcFzZUdd-ZI3JzeS5ozDLQMTwnghqkkF-HQPigA=w260',
  },
  {
    label: 'Фиолетовый',
    img: 'https://lh6.googleusercontent.com/5UcJMIt2RoJWr0MYf3NCIvCXu4jHwzQxIGt6Pt-O5zeZOqZ_Xq-0o8sFBedg7ByBX2Rv_OZaPfPWCPec4Sg3TR2IYy9rF11DgKSHVFUT7N_UVQUtcqJ7EnZ--mEC5Ou8Rw=w260',
  },
  {
    label: 'Темно-синий',
    img: 'https://lh6.googleusercontent.com/T2zUFNzLnGioZgPiy8NIdGcn0OxufAsU_YUasBuFmeWcTwNDABqggJlIL0Zyr00up666osDVA3i0ujXhcWD048muJCNzNT6QVGnydd8uRIvPDZkO7_tAOE3cW5jktLWG3A=w260',
  },
];

function RibbonColorSelector({ ribbonColor, setRibbonColor }) {
  useEffect(() => {
    console.log('ribbon color', ribbonColor);
  }, [ribbonColor]);
  return (
    <fieldset className='row g-0'>
      <legend>
        <h3>Выберите цвет ленты</h3>
      </legend>
      {options.map((item, index) => {
        return (
          <Option
            key={index}
            {...item}
            inputId={index}
            isSelected={ribbonColor === item.label}
            setSelected={setRibbonColor}
          />
        );
      })}
    </fieldset>
  );
}

function Option({ label, img, inputId, isSelected, setSelected }) {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <div
        className={`tile tile--square border border-2 m-2 ${
          isSelected ? 'border-success' : 'border-dark'
        }`}
      >
        <div className='content p-3'>
          <img src={img} alt={`Цвет ленты: ${label}`} />

          <div className='cbx cbx--onborder'>
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
      </div>
    </div>
  );
}

export default RibbonColorSelector;
