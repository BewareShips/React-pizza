import React from 'react'
import PropTypes from 'prop-types';
import s from './PizzaBlock.module.scss'
import ButtonPizza from '../ButtonPizza/ButtonPizza';




function PizzaBlock({id,name,imageUrl,types,sizes,price,onClickAddPizza,addedCount}) {
  const [activeItem, setActiveItem] = React.useState(types[0])
  const [activeSize, setActiveSize] = React.useState(0)
  const typeItem = ['тонкое','традиционное']
  const typeSizes = [26,30,40]

 

  const onSelectedType = (idx)=>{
    setActiveItem(idx)
  }

  const onAddPizza=() =>{
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size:typeSizes[activeSize],
      type:typeItem[activeItem]
    }
    onClickAddPizza(obj)
  }


  return (
    
            <div className={s.pizzaBlock}>
              <img
                className={s.pizzaBlock__image}
                src={imageUrl}
                alt="Pizza"
              />
              <h4  className={s.pizzaBlock__title}>{name}</h4>
              <div className={s.pizzaBlock__selector}>
                <ul >
                  {typeItem.map((el,idx)=><li key={`${el}__${idx}`} onClick={()=>onSelectedType(idx)}
                  className={` ${activeItem ===idx ? s.active : " "} 
                              ${!types.includes(idx) ? s.disabled : " "}`}>{el}</li>)}
                 
                </ul>
                <ul >
                  {typeSizes.map((el,idx)=><li key={`${el}__${idx}`} onClick={()=>setActiveSize(idx)}
                  className={` ${activeSize ===idx ? s.active: " "}               
                              ${!sizes.includes(el) ? s.disabled : " "}`}>{el} см.</li>)}
                </ul>
              </div>
              <div className={s.pizzaBlock__bottom}>
                <div className={s.pizzaBlock__price}>от {price} ₽</div>
                <ButtonPizza addedCount={addedCount} onClick={onAddPizza}/>
              </div>
            </div>
          
  )
}

// PizzaBlock.propTypes = {
//   name: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   types: PropTypes.arrayOf(PropTypes.string).isRequired,
//   sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   price: PropTypes.number.isRequired
// }

// PizzaBlock.defaultProps = {
//   name: '---',
//   price:0,
//   types:[],
//   sizes:[]
// }

export default PizzaBlock
