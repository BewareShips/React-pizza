import React from "react";
import s from "./Button.module.scss"

function Button() {
  return (
    <div className="header__cart">
      <a href="/cart.html" className={s.button }>
        <span>520 ₽</span>
        <div className={s.button__delimiter}></div>
        <span>3</span>
      </a>
    </div>
  );
}

export default Button;
