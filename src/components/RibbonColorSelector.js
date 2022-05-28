import React, { useState } from 'react';

import Section from './common/Section';
import Checkbox from './common/checkbox/Checkbox';

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
];

function RibbonColorSelector() {
  const [selected, setSelected] = useState(null);
  return (
    <Section title='Выберите цвет ленты'>
      {options.map((item, index) => {
        return <Option key={index} {...item} />;
      })}
    </Section>
  );
}

function Option({ label, img, isSelected, setSelected }) {
  const onOptionClick = () => {
    if (!isSelected) setSelected(label);
  };
  return (
    <div>
      <img src={img} alt={`Цвет ленты: ${label}`} />
      <Checkbox
        checked={isSelected}
        text={label}
        onClick={() => onOptionClick}
      />
    </div>
  );
}

export default RibbonColorSelector;
