import {combineReducers} from "redux";
import {ProductsReducer, TProductState} from "./products.reducer.ts";
import {CartReducers, TCartState} from "./cart.reducer.ts";

export type TRootState={
    product:TProductState,
    cart:TCartState,
}
export const RootReducer = combineReducers({
    product:ProductsReducer,
    cart:CartReducers
})