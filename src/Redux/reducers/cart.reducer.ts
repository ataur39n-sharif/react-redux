/* eslint-disable no-case-declarations */
import {AnyAction} from "redux";
import {CartActionTypes} from "../actionTypes/cart.actionTypes.ts";
import {IProduct} from "./products.reducer.ts";

export interface ICartProduct extends IProduct {
    quantity: number,
    position: number
}

export type TCartState = {
    products: ICartProduct[],
    shippingCost: number,
    discount: number,
    subTotal: number,
    total: number,
}
const initialState: TCartState = {
    products: [],
    subTotal: 0,
    shippingCost: 0,
    discount: 0,
    total: 0,
}

export const CartReducers = (state = initialState, action: AnyAction) => {
    const {type, payload} = action
    let updatedList;
    switch (type) {
        case CartActionTypes.LOAD_CART_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case CartActionTypes.INCREMENT_QUANTITY:
            updatedList = state.products.map(product => {
                if (product._id === payload._id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product
                }
            })

            return {
                ...state,
                products: updatedList
            }
        case CartActionTypes.DECREMENT_QUANTITY:
            updatedList = state.products.map(product => {
                if (product._id === payload._id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product
                }
            })

            return {
                ...state,
                products: updatedList
            }
        case CartActionTypes.SET_QUANTITY:
            updatedList = state.products.map(product => {
                if (product._id === payload._id) {
                    return {
                        ...product,
                        quantity: payload.quantity
                    }
                } else {
                    return product
                }
            })
            return {
                ...state,
                products: updatedList
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state
    }
}
