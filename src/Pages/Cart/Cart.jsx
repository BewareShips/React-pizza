import React from "react";
import s from "./Cart.module.scss";

function Cart() {
  return (
    <div class="header__cart">
      <div class="button button--cart">
        <span>520 ₽</span>
        <div class="button__delimiter"></div>
        
        <span>3</span>
      </div>
    </div>
  );
}

export default Cart;
