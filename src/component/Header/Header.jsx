/* eslint-disable react/style-prop-object */
import React from 'react';
import Logo from '../../image/logo.svg';
import SocialLink from './components/SocialLink/SocialLink';
import Locate from './components/Locate/Locate';
import Phone from './components/Phone/Phone';
import "../../style/_header.scss";

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <ul className='header__list'>
          <li className='header__list-item'>
            <p className='header__logo-text'>строительная компания</p>
            <img src={Logo} alt='logo' />
          </li>
          <li>
            <Locate styleP={'header__text-grific'} StyleLink={'header__grafic-link'} />
          </li>
          <li>
            <Phone slyleUl={'header__contact-item'} styleLi={'header__tel'} />
          </li>
          <li className='header__social-item'>
            <button className='header__button'>заказать звонок</button>
            <SocialLink style={'header__list-social'} width={27} />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header