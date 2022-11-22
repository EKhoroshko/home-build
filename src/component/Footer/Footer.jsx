import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.svg';
import Youtube from '../../image/youtube.svg';
import Instagram from '../../image/instagram.svg';
import VK from '../../image/vk.svg';
import Whatsapp from '../../image/whatsapp.svg';
import Telegram from '../../image/telegram.svg';
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
                <p className='footer__text-grific'>Есть вопрос: <span><a className='footer__grafic-link' href='mailto:xapoxa14@gmail.com'>smasmysmestroy@bg.com</a></span></p>
                <p className='footer__text-grific'>Моск.обл. г.Ступино ул.Промышленная </p>
                <p className='footer__text-grific'>Пн-Сб 9:00-18:00, Вс - выходной</p>
              </li>

              <li>
                <ul>
                  <li className='footer__contact-item'>
                    <a
                      className='footer__tel'
                      href="tel:+380930725966">+38 (093) 07-25-966
                    </a>
                  </li>
                  <li>
                    <a
                      className='footer__tel'
                      href="tel:+380930725966">+38 (093) 07-25-966
                    </a>
                  </li>
                </ul>
              </li>

              <li className='footer__social-item'>
                <p className='footer__social-title'>Мы в социальных сетях:</p>
                <ul className='footer__list-social'>
                  <li>
                    <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
                      <img src={Youtube} alt="youtube" />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                      <img src={Instagram} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href='https://vk.com/' target="_blank" rel="noreferrer">
                      <img src={VK} alt="vk" />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.whatsapp.com/' target="_blank" rel="noreferrer">
                      <img src={Whatsapp} alt="whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href='https://web.telegram.org/' target="_blank" rel="noreferrer">
                      <img src={Telegram} alt="telegram" />
                    </a>
                  </li>
                </ul>
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