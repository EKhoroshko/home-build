import React from 'react';
import Youtube from '../../../../image/youtube.svg';
import Instagram from '../../../../image/instagram.svg';
import VK from '../../../../image/vk.svg';
import Whatsapp from '../../../../image/whatsapp.svg';
import Telegram from '../../../../image/telegram.svg';

function SocialLink({ style, width }) {
  return (
    <ul className={style}>
      <li>
        <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
          <img src={Youtube} alt="youtube" width={width} height={width} />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
          <img src={Instagram} alt="instagram" width={width} height={width} />
        </a>
      </li>
      <li>
        <a href='https://vk.com/' target="_blank" rel="noreferrer">
          <img src={VK} alt="vk" width={width} height={width} />
        </a>
      </li>
      <li>
        <a href='https://www.whatsapp.com/' target="_blank" rel="noreferrer">
          <img src={Whatsapp} alt="whatsapp" width={width} height={width} />
        </a>
      </li>
      <li>
        <a href='https://web.telegram.org/' target="_blank" rel="noreferrer">
          <img src={Telegram} alt="telegram" width={width} height={width} />
        </a>
      </li>
    </ul>
  )
}

export default SocialLink