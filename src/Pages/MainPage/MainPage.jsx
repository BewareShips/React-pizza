import React from "react";
import Categories from "../../Components/Categories/Categories";
import SortBy from "../../Components/SortBy/SortBy";
import s from "./MainPage.module.scss";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";

function MainPage({ items }) {
  return (
  
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.content__top}>
            <Categories
              item={[
                "Все",
                "Мясные",
                "Вегетарианская",
                "Гриль",
                "Острые",
                "Закрытые",
              ]}
            />
            <SortBy 
              item={[
                {name:"популярности",type:"popular"},
                {name:"цене",type:"price"},
                {name:"алфавиту",type:"alphabet"}
              ]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className={s.wrapper}>
            {items.map((el) => (
              <PizzaBlock key={el.id} {...el}/>
            ))}
          </div>
        </div>
      </div>
  );
}

export default MainPage;
