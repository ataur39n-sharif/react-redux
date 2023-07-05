import {AnyAction} from "redux";
import {CartActionTypes} from "../actionTypes/cart.actionTypes.ts";

export type TCartProduct={
    image:string,
    title:string,
    subtitle:string,
    price:number,
    quantity:number
}
export type TInitialCartState={
    products:TCartProduct[],
    shippingCost:number,
    discount: number,
    subTotal: number,
    total: number,
}
const initialState:TInitialCartState={
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