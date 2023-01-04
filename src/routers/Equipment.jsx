import React from 'react';
import { Link } from 'react-router-dom';
import { menuCategory } from '../enum/MenuCategory';
import '../style/_equipment.scss';

function Equipment() {
  return (
    <div className='equipment__box'>
      <div className='equipment__menu'>
        <Link className='equipment__link' to='/'>{menuCategory.home}</Link>
        <Link className='equipment__link' >{menuCategory.equipment}</Link>
      </div>
      <h2 className='equipment__title'>{menuCategory.equipment}</h2>
      <p className='equipment__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
        sequi vitae. Nesciunt facilis libero minima adipisci. Qui earum
        rem repellat perspiciatis iusto cumque, minus nam consectetur!
        Architecto cupiditate repellendus eius.
      </p>
    </div>
  )
}

export default Equipment;