import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';

export default function Section({ title, children }) {
  return (
    <section>
      {title && title.length && <h3 className=''>{title}</h3>}
      <div className='d-f fxw-w'>{children}</div>
    </section>
  );
}

Selection.propTypes = {
  title: PropTypes.string,
};
