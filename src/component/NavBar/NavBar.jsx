import React from 'react';
import { Link } from 'react-router-dom';
import { menuCategory } from '../../enum/MenuCategory';
import '../../style/_navbar.scss';

function NavBar() {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar__item'>
          <div className='container'>
            <ul className='navbar__item-list'>
              <li>
                <Link className='navbar__link' to='/'>{menuCategory.home}</Link>
              </li>
              <li>
                <Link className='navbar__link' to='equipment'>{menuCategory.equipment}</Link>
              </li>
              <li>
                <Link className='navbar__link' to='customer'>{menuCategory.customer}</Link>
              </li>
              <li>
                <Link className='navbar__link' to='delivery'>{menuCategory.delivery}</Link>
              </li>
              <li>
                <Link className='navbar__link' to='ourwork'>{menuCategory.ourwork}</Link>
              </li>
              <li>
                <Link className='navbar__link' to='contact'>{menuCategory.contact}</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className='navbar__item-catalog'>
          <div className='container'>
            <ul className='navbar__item-list'>
              <li>
                <Link className='navbar__catalog-link'>Каталог домов</Link>
              </li>
              <li>
                <Link className='navbar__catalog-link'>Каталог бытовок</Link>
              </li>
              <li>
                <Link className='navbar__catalog-link'>Каталог беседок</Link>
              </li>
              <li>
                <Link className='navbar__catalog-link'>Каталог бань</Link>
              </li>
              <li>
                <Link className='navbar__catalog-link'>Каталог хоз.построек</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar