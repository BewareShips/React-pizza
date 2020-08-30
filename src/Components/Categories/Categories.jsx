import React, { useState } from "react";
import s from "./Categories.module.scss";

function Categories({ item }) {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className={s.categories}>
      <ul className={s.categories__list}>
        {item && 
          item.map((name, idx) => (
          <li
            className={activeItem === idx ? s.active : ""}
            onClick={() => setActiveItem(idx)}
            key={`${name}_${idx}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
