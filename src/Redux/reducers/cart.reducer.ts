import {AnyAction} from "redux";
import {CartActionTypes} from "../actionTypes/cart.actionTypes.ts";
import {IProduct} from "./products.reducer.ts";

export interface ICartProduct extends IProduct{
    quantity: number
}
export type TCartState={
    products:ICartProduct[],
    shippingCost:number,
    discount: number,
    subTotal: number,
    total: number,
}
const initialState:TCartState={
    products:[],
    subTotal:0,
    shippingCost:0,
    discount:0,
    total:0,
}

export const CartReducers =(state=initialState,action:AnyAction)=>{
    switch(action.type){
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                products:[...state.products,action.payload]
            }
        default:
           return  state
    }
}