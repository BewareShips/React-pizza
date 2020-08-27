import React from "react";
import Categories from "../../Components/Categories/Categories";
import SortBy from "../../Components/SortBy/SortBy";
import s from "./MainPage.module.scss"
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";


function MainPage() {
  return (
    <div className="wrapper">
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.content__top}>
            <Categories  item={['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']}/>
            <SortBy item={['популярности','цене','алфавиту']}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <PizzaBlock/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
