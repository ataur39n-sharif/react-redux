import {productsActionTypes} from "../../actionTypes";
import {TProduct} from "../../reducers/Products/productsReducers";

export type TFetching = {
    type: typeof productsActionTypes.FETCH_PRODUCTS | productsActionTypes.FETCH_SINGLE_PRODUCT,
}

export type TGetAllProducts = {
    type: typeof productsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: TProduct[]
}

export type TGetSingleProduct = {
    type: typeof productsActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
    payload: TProduct
}

export type THandleError = {
    type: typeof productsActionTypes.FETCH_PRODUCTS_FAILURE |productsActionTypes.FETCH_SINGLE_PRODUCT_FAILURE,
    payload: string
}

export type TProductActionHandlers = TGetAllProducts | THandleError | TFetching | TGetSingleProduct