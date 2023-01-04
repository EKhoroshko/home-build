/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLink from '../Header/components/SocialLink/SocialLink';
import Phone from '../Header/components/Phone/Phone';
import Locate from '../Header/components/Locate/Locate';
import Logo from '../../image/logo.svg';
import '../../style/_footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <ul>
          <li className='footer__item'>
            <ul className='footer__item-list'>
              <li>
                <p className='footer__logo-text'>строительная компания</p>
                <img src={Logo} alt='logo' />
              </li>

              <li>
                <Locate styleP={'footer__text-grific'} StyleLink={'footer__grafic-link'} />
              </li>

              <li>
                <Phone slyleUl={'footer__contact-item'} styleLi={'footer__tel'} />
              </li>
              <li className='footer__social-item'>
                <p className='footer__social-title'>Мы в социальных сетях:</p>
                <SocialLink style={'footer__list-social'} />
              </li>
            </ul>
          </li>


          <li className='footer__item'>
            <ul className='footer__item-list second'>
              <li className='footer__item-width'>
                <h4 className='footer__item-category'>продукция</h4>
                <ul>
                  <li className='footer__category-name'>Каркасные дома</li>
                  <li className='footer__category-name'>Модульные дома</li>
                  <li className='footer__category-name'>Бани “Под ключ”</li>
                  <li className='footer__category-name'>Беседки</li>
                  <li className='footer__category-name'>Бытовки (утепленные)</li>
                  <li className='footer__category-name'>Хоз. постройки
                    (без утепления)</li>
                </ul>
              </li>
              <li className='footer__item-width'>
                <h4 className='footer__item-category'>комплектация</h4>
                <ul>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='equipment'>Комплектация домов</Link></li>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='equipment'>Комплектация бань</Link></li>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='equipment'>Комплектация беседок</Link></li>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='equipment'>Комплектация бытовок</Link></li>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='equipment'>Комплектация хоз.построек</Link></li>
                </ul>
              </li>
              <li className='footer__item-width'>
                <h4 className='footer__item-category'>заказчику</h4>
                <ul>
                  <li className='footer__category-name'>Индивидуальное строительство</li>
                  <li className='footer__category-name'>Фиксированные цены</li>
                  <li className='footer__category-name'>Дистанционное оформление договора</li>
                  <li className='footer__category-name'>Материнский капитал</li>
                  <li className='footer__category-name'>Порядок оплаты</li>
                  <li className='footer__category-name'>Процесс заказа</li>
                </ul>
              </li>
              <li className='footer__item-width'>
                <h4 className='footer__item-category'>полезно</h4>
                <ul>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='delivery'>Доставка и сборка</Link>
                  </li>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='contact'> Контакты</Link>
                  </li>
                  <li className='footer__category-name'>
                    <Link className='footer__category-link' to='ourwork'>Наши работы</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <button className='footer__button margin'>честный калькулятор беседок</button>
                  </li>
                  <li>
                    <button className='footer__button'>связаться с нами</button>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className='third'>
            <ul className='footer__item-list'>
              <li>
                <p>Copyright © “ДОМСТРОЙ” 2022. Все права защищены.</p>
              </li>
              <li className='footer__item-list gap'>
                <p>Политика конфиденциальности</p>
                <p>Пользовательское соглашение</p>
                <p>Cookies</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer