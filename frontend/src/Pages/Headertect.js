import React from 'react'
// import './CSS/HeaderText.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'

export default function HeaderText() {
   return (
      <section className="header__container">
         <h1 className="header__title">Recycle Now
         <FontAwesomeIcon icon={faRecycle} className="header__icon" />
         </h1>
         
    </section>
   )
}