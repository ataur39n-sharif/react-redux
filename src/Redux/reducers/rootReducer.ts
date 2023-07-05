import {combineReducers} from "redux";
import {ProductsReducer} from "./products.reducer.ts";
import {CartReducers} from "./cart.reducer.ts";

export const RootReducer = combineReducers({
    product:ProductsReducer,
    cart:CartReducers
})