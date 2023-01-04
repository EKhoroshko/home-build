import React from 'react'

function Locate({ styleP, StyleLink }) {
  return (
    <>
      <p className={styleP}>Есть вопрос: <span><a className={StyleLink} href='mailto:xapoxa14@gmail.com'>smasmysmestroy@bg.com</a></span></p>
      <p className={styleP}>Моск.обл. г.Ступино ул.Промышленная </p>
      <p className={styleP}>Пн-Сб 9:00-18:00, Вс - выходной</p>
    </>
  )
}

export default Locate