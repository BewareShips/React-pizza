import React from "react";
import s from "./SortBy.module.scss";

function SortBy({ item }) {
  const [visible, setVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const ref = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener("click", onVisible);
  }, []);

  const toogleVisible = () => (
    setVisible(!visible)
  );

  const toActivateItem = (idx)=>{
     setActiveItem(idx);
     
  }
  

  const onVisible = (e) => {
    if (!e.path.includes(ref.current)) {
      setVisible(false);
    }
  };

  const itemSort = item.map((el,idx)=><li onClick={()=>toActivateItem(idx)} className={activeItem===idx ? s.active : " "}>{el}</li>)

  return (
    <div ref={ref} className={s.sort}>
      <div className={s.sort__label}>
        <b>Сортировка по:</b>
  <span onClick={toogleVisible}>{item[activeItem]}</span>
      </div>
      {visible && (
        <div className={s.sort__popup}>
          <ul>
            {/* <li className={s.active}>популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li> */}
            {itemSort}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortBy;
