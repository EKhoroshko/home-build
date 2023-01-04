/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import { menuCategory } from '../enum/MenuCategory';
import arrow from '../image/arrowRight.svg';
import SocialLink from '../component/Header/components/SocialLink/SocialLink';
import '../style/_contact.scss';

function Contact() {
  return (
    <>
      <ul className='contact'>
        <li className='contact__item'>
          <div className='contact__box'>
            <div>
              <Link className='equipment__link' to='/'>{menuCategory.home}</Link>
              <Link className='equipment__link' >{menuCategory.contact}</Link>
            </div>
            <h2 className='contact__title'>{menuCategory.contact}</h2>
            <p className='contact__text'>
              Свяжитесь с нами и мы ответим на все вопросы по строительству,
              а также будем рады видеть Вас в нашем офисе.
            </p>
            <button className='contact__button' type='button'>
              <p className='contact__buttonp'>
                <img className='contact__img' src={arrow} alt='arrow right' />
              </p>
              задать вопрос</button>
            <div className='contact__phonebox'>
              <a className='contact__phonelink' href="tel:+79000000000">
                <p className='contact__name'>Менеджер Елена</p>
                <p className='contact__number'>+7 (900) 000-00-00</p>
              </a>
              <a className='contact__phonelink' href="tel:+79000000000">
                <p className='contact__name'>Начальник производства</p>
                <p className='contact__name'>Иван</p>
                <p className='contact__number'>+7 (900) 000-00-00</p>
              </a>
            </div>
          </div>
          <ul className='contact__adress'>
            <li>
              <p>Адрес:</p>
              <p>г. Москва, 100 км МКАД, ТЦ “ТЦ”</p>
              <p>Ежедневно с 10:00 до 19:00</p>
            </li>
            <li>
              <p>Электронная почта:</p>
              <a href="mailto:mail@gmail.com">mail@gmail.com</a>
            </li>
            <li>
              <p>Мы в социальных сетях:</p>
              <SocialLink style={'footer__list-social'} />
            </li>
          </ul>
        </li>
        <li>
          тут карта
        </li>
      </ul>

    </>
  )
}

export default Contact;