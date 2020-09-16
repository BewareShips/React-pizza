import React from "react";

import s from "./ButtonPizza.module.scss"

const ButtonPizza = ({onClick,addedCount}) => {
  return (
    <button 
    onClick={onClick}
      className={s.button}>
        <span > + Добавить</span>
  {addedCount && <i>{addedCount}</i>}
    </button>
  );
};
export default ButtonPizza;
