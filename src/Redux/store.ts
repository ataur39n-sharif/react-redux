import {createStore} from "redux";
import {CartReducers} from "./reducers/cart.reducer.ts";


export const store= createStore(CartReducers)