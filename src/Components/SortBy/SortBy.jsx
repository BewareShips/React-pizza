import React from "react";
import s from "./SortBy.module.scss";

function SortBy({ itemRatingPizzas,onClickSortType,activeSortType }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener("click", onVisible);
  }, []);

  const onVisible = (e) => {
    if (!e.path.includes(ref.current)) {
      setVisible(false);
    }
  };

  const toogleVisible = () => setVisible(!visible);

  const toActivateItem = (el) => {
    if(onClickSortType){
      onClickSortType(el);
    }
  };

  const itemSort = itemRatingPizzas.map((el, idx) => (
    <li
      onClick={() => toActivateItem(el)}
      key={el.type}
      className={activeSortType === el.type ? s.active : " "}
    >
      {el.name}
    </li>
  ));

  const activeLabel = itemRatingPizzas.find(obj=>obj.type === activeSortType)
  console.log(itemRatingPizzas)
  console.log(itemRatingPizzas.find(obj=>obj.type === activeSortType))

  return (
    <div ref={ref} className={s.sort}>
      <div className={s.sort__label}>
        <b>Сортировка по:</b>
        <span onClick={toogleVisible}>{activeLabel.name}</span>
      </div>
      {visible && (
        <div className={s.sort__popup}>
          <ul>
            {itemSort}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortBy;
