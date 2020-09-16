import React from "react";
import { useSelector } from 'react-redux'
import s from "./ButtonCart.module.scss"
import busket from "../../assets/img/cart.svg";
import { Link } from "react-router-dom";

function ButtonCart() {
  const {totalPrice,totalCount} = useSelector( ({cart}) => cart)
  return (
    <div >
      <Link to='/cart' className={s.button }>
        <span>{totalPrice} ₽</span>
        <div className={s.button__delimiter}></div>
        <img className={s.img} src={busket}></img>
        <span >{totalCount}</span>
      </Link>
    </div>
  );
}

export default ButtonCart;
