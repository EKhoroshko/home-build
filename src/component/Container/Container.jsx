import React from 'react';
import '../../style/_layout.scss';

function Container({ children }) {
  return (
    <div className='container-page'>
      {children}
    </div>
  )
}

export default Container