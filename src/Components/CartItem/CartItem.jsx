import React from "react";
import s from "./CartItem.module.scss";


function CartItem({ id,name, type,imageUrl, size, totalPrice,totalCount,onRemoveItem }) {
  
  return (
    <div className={s.item}>
      <div className={s.item__img}>
        <img
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className={s.item__info}>
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className={s.item__count}>
        {/* <div className={s.item__button} >
          <span className={s.item__button__minus}>-</span>
        </div> */}
        <b>{totalCount}</b>
        {/* <div className={s.item__button} onClick={()=>alert(123)}>
        </div> */}
      </div>
      <div className={s.item__price}>
        <b>{totalPrice} ₽</b>
      </div>
      <div className={s.item__remove}>
        <div className={s.item__button} >
          <span className={s.item__button__remove} onClick={()=>onRemoveItem(id)}>х</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
