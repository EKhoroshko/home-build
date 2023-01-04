import React from 'react'

function Phone({ slyleUl, styleLi }) {
  return (
    <ul>
      <li className={slyleUl}>
        <a
          className={styleLi}
          href="tel:+380930725966">+38 (093) 07-25-966
        </a>
      </li>
      <li>
        <a
          className={styleLi}
          href="tel:+380930725966">+38 (093) 07-25-966
        </a>
      </li>
    </ul >
  )
}

export default Phone