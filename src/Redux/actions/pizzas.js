import Axios from 'axios';

export const SET_PIZZAS = 'SET_PIZZAS'
export const SET_LOADED = 'SET_LOADED'

export const setLoaded = (payload) =>({
  type: 'SET_LOADED',
  payload
})

export const fetchPizzas = (sortBy,category) => (dispatch)=>{

  dispatch(setLoaded(false))
  Axios.get(`/pizzas?${
    category !== null ? `category=${category}`: ''
  }&_sort=${sortBy.type}&_order=${sortBy.order}`)
  .then(({data})=> dispatch(setPizzasAction(data)))
  
 }

export const setPizzasAction = (items) =>({
  type:'SET_PIZZAS',
  payload: items
})

export default setPizzasAction