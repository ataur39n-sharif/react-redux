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
    let updatedList: ICartProduct[];
    let updateSubTotal: number;
    let updateTotal: number;
    switch (type) {
        case CartActionTypes.LOAD_CART_PRODUCTS:
            updateSubTotal = (payload as ICartProduct[]).reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);

            updateTotal = updateSubTotal + state.shippingCost - state.discount
            return {
                ...state,
                products: payload,
                subTotal: updateSubTotal,
                total: updateTotal
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

            updateSubTotal = updatedList.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);

            updateTotal = updateSubTotal + state.shippingCost - state.discount
            return {
                ...state,
                products: updatedList,
                subTotal: updateSubTotal,
                total: updateTotal
            }
        case CartActionTypes.DECREMENT_QUANTITY:
            updatedList = state.products.map(product => {
                if (product._id === payload._id && product.quantity > 0) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product
                }
            })
            updateSubTotal = updatedList.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);

            updateTotal = updateSubTotal + state.shippingCost - state.discount

            return {
                ...state,
                products: updatedList,
                subTotal: updateSubTotal,
                total: updateTotal
            }
        case CartActionTypes.SET_QUANTITY:
            updatedList = state.products.map(product => {
                if (product._id === payload._id && payload.quantity > 0) {
                    return {
                        ...product,
                        quantity: payload.quantity
                    }
                } else {
                    return product
                }
            })
            updateSubTotal = updatedList.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);

            updateTotal = updateSubTotal + state.shippingCost - state.discount
            return {
                ...state,
                products: updatedList,
                subTotal: updateSubTotal,
                total: updateTotal
            }
        case CartActionTypes.ADD_SHIPPING_COST:
            updateTotal = state.subTotal + Number(payload)
            return {
                ...state,
                shippingCost: Number(payload),
                total: updateTotal
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
