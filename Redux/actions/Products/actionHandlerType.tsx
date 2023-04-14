import {productsActionTypes} from "../../actionTypes";
import {TProduct, TProducts} from "../../reducers/Products/productsReducers";

export type TFetching = {
    type: typeof productsActionTypes.FETCH_PRODUCTS | productsActionTypes.FETCH_SINGLE_PRODUCT,
}

export type TGetAllProducts = {
    type: typeof productsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: TProducts
}

export type TGetSingleProduct = {
    type: typeof productsActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
}

export type TPaginate = {
    type: typeof productsActionTypes.PAGINATE_DATA,
    payload: number
}

export type TDeleteProductRequest = {
    type: typeof productsActionTypes.DELETE_PRODUCT
}

export type TDeleteProductSuccess = {
    type: typeof productsActionTypes.DELETE_PRODUCT_SUCCESS
}

export type THandleError = {
    type: typeof productsActionTypes.FETCH_PRODUCTS_FAILURE | productsActionTypes.FETCH_SINGLE_PRODUCT_FAILURE | productsActionTypes.DELETE_PRODUCT_FAILURE,
    payload: string
}

export type TProductActionHandlers =
    TGetAllProducts
    | THandleError
    | TFetching
    | TGetSingleProduct
    | TDeleteProductRequest
    | TDeleteProductSuccess