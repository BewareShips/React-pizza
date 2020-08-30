import { combineReducers } from "redux";
import filterReducer from './filter'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  filter: filterReducer,
  pizza: pizzasReducer
})

export default rootReducer