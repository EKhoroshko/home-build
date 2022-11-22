import React from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../../image/logo.svg';
import Youtube from '../../image/youtube.svg';
import Instagram from '../../image/instagram.svg';
import VK from '../../image/vk.svg';
import Whatsapp from '../../image/whatsapp.svg';
import Telegram from '../../image/telegram.svg';
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
            <p className='header__text-grific'>Есть вопрос: <span><a className='header__grafic-link' href='mailto:xapoxa14@gmail.com'>smasmysmestroy@bg.com</a></span></p>
            <p className='header__text-grific'>Моск.обл. г.Ступино ул.Промышленная </p>
            <p className='header__text-grific'>Пн-Сб 9:00-18:00, Вс - выходной</p>
          </li>
          <li>
            <ul>
              <li className='header__contact-item'>
                <a
                  className='header__tel'
                  href="tel:+380930725966">+38 (093) 07-25-966
                </a>
              </li>
              <li>
                <a
                  className='header__tel'
                  href="tel:+380930725966">+38 (093) 07-25-966
                </a>
              </li>
            </ul>
          </li>
          <li className='header__social-item'>
            <button className='header__button'>заказать звонок</button>
            <ul className='header__list-social'>
              <li>
                <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
                  <img src={Youtube} alt="youtube" width={27} height={27} />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                  <img src={Instagram} alt="instagram" width={27} height={27} />
                </a>
              </li>
              <li>
                <a href='https://vk.com/' target="_blank" rel="noreferrer">
                  <img src={VK} alt="vk" width={27} height={27} />
                </a>
              </li>
              <li>
                <a href='https://www.whatsapp.com/' target="_blank" rel="noreferrer">
                  <img src={Whatsapp} alt="whatsapp" width={27} height={27} />
                </a>
              </li>
              <li>
                <a href='https://web.telegram.org/' target="_blank" rel="noreferrer">
                  <img src={Telegram} alt="telegram" width={27} height={27} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <NavBar />
    </header>
  )
}

export default Header