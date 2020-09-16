import React from "react";
import { Link } from "react-router-dom";
import s from "./Cart.module.scss";
import EmptyCart from "./EmptyCart";

import trash from "../../assets/img/trash.svg";
import busket from "../../assets/img/busket.svg";
import arrow from "../../assets/img/grey-arrow-left.svg";
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector,useDispatch} from "react-redux";
import { clearCart,removeCartItem } from "../../Redux/actions/cart";



function Cart() {
   const dispatch = useDispatch()
  const { totalCount, totalPrice, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () =>{
    if(window.confirm('Вы действительно хотите очистить корзину?')){
      dispatch(clearCart())
    } 
  }

  const onRemoveItem = (id) =>{
    if(window.confirm('Вы действительно хотите удалить ?')){
      dispatch(removeCartItem(id))
    } 
  }
  return (
    <div className={s.container}>
      {totalCount ? (
        <div className={s.cart}>
          <div className={s.cart__top}>
            <h2 className={s.cart__title}>
              <img src={busket} alt="busket" />
              <span> Корзина</span>
            </h2>
            <div className={s.cart__clear}>
              <span onClick={onClearCart}>
                Очистить корзину <img src={trash} alt="trash sign" />
              </span>
            </div>
          </div>
          <div >
            {addedPizzas.map((obj) => (
              <CartItem
                id={obj.id}
                name={obj.name}
                type={obj.type}
                imageUrl={obj.imageUrl}
                size={obj.size}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </div>
          <div className={s.bottom}>
            <div className={s.bottom__details}>
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice}₽</b>
              </span>
            </div>
            <div className={s.bottom__buttons}>
              <Link to="/" className={`${s.goBackBtn} ${s.button}`}>
                <img src={arrow} />
                <span>Вернуться назад</span>
              </Link>
              <button className={`${s.payButton} ${s.button}`}>
                <span>Оплатить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
