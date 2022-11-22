import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/_navbar.scss';

function NavBar() {
  return (
    <ul className='navbar'>
      <li className='navbar__item'>
        <div className='container'>
          <ul className='navbar__item-list'>
            <li>
              <Link className='navbar__link' to='/'>Главная</Link>
            </li>
            <li>
              <Link className='navbar__link' to='equipment'>Комплектация</Link>
            </li>
            <li>
              <Link className='navbar__link' to='customer'>Заказчику</Link>
            </li>
            <li>
              <Link className='navbar__link' to='delivery'>Доставка и сборка</Link>
            </li>
            <li>
              <Link className='navbar__link' to='ourwork'>Наши роботы</Link>
            </li>
            <li>
              <Link className='navbar__link' to='contact'>Контакты</Link>
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
  )
}

export default NavBar