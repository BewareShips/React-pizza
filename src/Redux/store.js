import { createStore,compose,applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

window.store = store;
export default store