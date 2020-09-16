// import { SET_PIZZAS, SET_LOADED } from "../actions/pizzas";
const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);


const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const allPizzas = Object.values(newItems).reduce(
        (sum, obj) => sum.concat(obj.items),
        []
      );

      return {
        ...state,
        items: newItems,
        totalCount: Object.values(newItems).reduce(
          (sum, obj) => sum.concat(obj.items),
          []
        ).length,
        totalPrice: getTotalPrice(allPizzas),
      };
    }

    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    case "REMOVE_CART_ITEM":
      const deletePrice = state.items[action.payload].totalPrice
      const deleteCount = state.items[action.payload].items.length


      const newItems = {...state.items}
      delete newItems[action.payload];

      

      return{
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - deletePrice,
        totalCount: state.totalCount - deleteCount
      }

    default:
      return state;
  }
};

export default cart;
