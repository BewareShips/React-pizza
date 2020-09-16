import React from "react";
import Categories from "../../Components/Categories/Categories";
import SortBy from "../../Components/SortBy/SortBy";
import s from "./MainPage.module.scss";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";
import { useSelector, useDispatch } from "react-redux";

import { setCategory,setSortBy} from "../../Redux/actions/filters";
import {fetchPizzas} from '../../Redux/actions/pizzas'
import {addPizzaToCart} from '../../Redux/actions/cart'

import LoadingPizzaBlock from "../../Components/PizzaBlock/LoadingPizzaBlock";

const itemSortsPizzas = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const itemRatingPizzas = [
  { name: "популярности", type: "popular",order:'desc' },
  { name: "цене", type: "price",order:'desc' },
  { name: "алфавиту", type: "name",order:'asc' },
];

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category,sortBy} = useSelector(({ filter }) => filter);
  

  React.useEffect(() =>{
      dispatch(fetchPizzas(sortBy,category))
  },[category,sortBy])

  const onSelectedCategory =
    ((idx) => {
      dispatch(setCategory(idx))
    });
    
    const onClickSortType =
    ((type) => {
      dispatch(setSortBy(type))
    });

    const handleAddPizzaToCart = (obj) =>{
      dispatch(addPizzaToCart(obj))
    }

  return (
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.content__top}>
          <Categories activeCategory = {category} onClickedIt={onSelectedCategory} item={itemSortsPizzas} />
          <SortBy activeSortType={sortBy.type} itemRatingPizzas={itemRatingPizzas} onClickSortType={onClickSortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className={s.wrapper}>
          {isLoaded ? items.map((el) =>
           <PizzaBlock onClickAddPizza={handleAddPizzaToCart} addedCount={cartItems[el.id] && cartItems[el.id].items.length} key={el.id} 
           {...el} />) : Array(items.length).fill(0).map((_,idx) =><LoadingPizzaBlock key={idx}/>)}
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;
