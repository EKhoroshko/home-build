import React from 'react';
import '../../style/_layout.scss';

function Layout({ children }) {
  return (
    <div className='box'>
      {children}
    </div>
  )
}

export default Layout