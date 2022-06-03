import '../../index.css';
import './checkbox.css';
import './tile.css';

import React, { useState } from 'react';

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

function RibbonColorSelector() {
  return (
    <fieldSet className='row g-0' style={{ position: 'relative' }}>
      <legend>
        <h3>Выберите цвет ленты</h3>
      </legend>
      {options.map((item, index) => {
        return <Option key={index} {...item} />;
      })}
    </fieldSet>
  );
}

function Option({ label, img, key }) {
  return (
    <div className='tile col-6 col-sm-4 col-md-3 '>
      <div className='content px-3' style={{ border: 'solid 1px black' }}>
        <div>
          <img src={img} alt={`Цвет ленты: ${label}`} />
        </div>
        <div className='cbx'>
          <label>
            <input
              type='radio'
              name='ribbonColor'
              id={`ribbonColor${key}`}
              value={label}
            />
            {label}
          </label>
        </div>
      </div>
    </div>
  );
}

export default RibbonColorSelector;
