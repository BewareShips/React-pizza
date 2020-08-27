import React from 'react'
import Button from '../Button/Button'
import logoSvg from '../../assets/img/pizza-logo.svg'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={s.header}>
        <div className={s.container}>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={s.header__logo}>
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          </Link>
          <Button/>
        </div>
      </div>
  )
}

export default Header
