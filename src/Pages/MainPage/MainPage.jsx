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
            <Categories/>
            <SortBy/>
            
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <PizzaBlock/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
