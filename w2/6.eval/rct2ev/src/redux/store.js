// TODO: use this store variable to create a store.
import { combineReducers,applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension"
import { productReducer } from "./product/product.reducer";


const rootReducer =combineReducers({
  userList:productReducer
})

const intialState={}
const middleware =[thunk]

// Note: you can delete the line below, but remember to create a new store variable
export const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
// if (window.Cypress) {
//   window.store = store;
// }

export default store