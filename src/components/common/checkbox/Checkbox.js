import React from 'react';
import PropTypes from 'prop-types';

import './checkbox.css';

export default function Checkbox({ checked, text, name }) {
  return (
    <div className='cbx' style={{ position: 'relative' }}>
      <input
        type='checkbox'
        className='cbx'
        name={name}
        id={name}
        checked={checked}
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
