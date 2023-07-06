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
    coupon: string | null,
    discount: number,
    subTotal: number,
    total: number,
}
const initialState: TCartState = {
    products: [],
    subTotal: 0,
    shippingCost: 0,
    coupon: null,
    discount: 0,
    total: 0,
}

export const CartReducers = (state = initialState, action: AnyAction) => {
    const {type, payload} = action
    let updatedList: ICartProduct[];
    let updateSubTotal: number;
    let updateTotal: number;
    let updateDiscount: number;

    switch (type) {
        case CartActionTypes.LOAD_CART_PRODUCTS:
            updateSubTotal = (payload as ICartProduct[]).reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            updateDiscount = state.coupon === "flat20" ? (updateSubTotal * 0.20) : 0

            updateTotal = updateSubTotal + state.shippingCost - updateDiscount
            return {
                ...state,
                products: payload,
                subTotal: updateSubTotal,
                total: updateTotal,
                discount: updateDiscount
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
            updateDiscount = state.coupon === "flat20" ? (updateSubTotal * 0.20) : 0

            updateTotal = updateSubTotal + state.shippingCost - updateDiscount
            return {
                ...state,
                products: updatedList,
                subTotal: updateSubTotal,
                total: updateTotal,
                discount: updateDiscount
            }
        case CartActionTypes.DECREMENT_QUANTITY:
            updatedList = state.products.map(product => {
                if (product._id === payload._id && product.quantity > 1) {
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

            updateDiscount = state.coupon === "flat20" ? (updateSubTotal * 0.20) : 0

            updateTotal = updateSubTotal + state.shippingCost - updateDiscount

            return {
                ...state,
                products: updatedList,
                subTotal: updateSubTotal,
                total: updateTotal,
                discount: updateDiscount
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

            updateDiscount = state.coupon === "flat20" ? (updateSubTotal * 0.20) : 0

            updateTotal = updateSubTotal + state.shippingCost - updateDiscount
            return {
                ...state,
                products: updatedList,
                subTotal: updateSubTotal,
                total: updateTotal,
                discount: updateDiscount
            }
        case CartActionTypes.ADD_SHIPPING_COST:
            updateTotal = state.subTotal + Number(payload)
            return {
                ...state,
                shippingCost: Number(payload),
                total: updateTotal
            }
        case CartActionTypes.REMOVE_FROM_CART:
            updatedList = state.products.filter((product) => product._id !== payload)
            updateSubTotal = updatedList.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);

            updateDiscount = state.coupon === "flat20" ? (updateSubTotal * 0.20) : 0

            updateTotal = updateSubTotal + state.shippingCost - updateDiscount
            return {
                ...state,
                products: updatedList,
                total: updateTotal,
                subTotal: updateSubTotal,
                discount: updateDiscount
            }
        case CartActionTypes.APPLY_COUPON:
            updateDiscount = payload.toString().toLowerCase() === "flat20" ? (state.subTotal * 0.20) : 0
            updateTotal = state.subTotal + state.shippingCost - updateDiscount

            return {
                ...state,
                coupon: payload.toString().toLowerCase(),
                total: updateTotal,
                discount: Number(updateDiscount).toFixed(2)
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
