import React from 'react'
import s from './PizzaBlock.module.scss'

function PizzaBlock() {
  return (
    
            <div className={s.pizzaBlock}>
              <img
                className={s.pizzaBlock__image}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={s.pizzaBlock__title}>Чизбургер-пицца</h4>
              <div className={s.pizzaBlock__selector}>
                <ul >
                  <li className={s.active}>тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul >
                  <li className={s.active}>26 см.</li>
                  <li>30 см.</li>
                  <li className={s.disabled}>40 см.</li>
                </ul>
              </div>
              <div className={s.pizzaBlock__bottom}>
                <div className={s.pizzaBlock__price}>от 395 ₽</div>
                <div className={s.button}>
                  <span> + Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
          
  )
}

export default PizzaBlock
