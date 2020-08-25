import React from 'react'
import s from './SortBy.module.scss'

function SortBy() {
  return (
    <div className={s.sort}>
              <div className={s.sort__label}>
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div className={s.sort__popup}>
                <ul>
                  <li className={s.active}>популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
            </div>
  )
}

export default SortBy
