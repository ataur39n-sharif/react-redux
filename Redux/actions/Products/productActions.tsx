import {TProduct, TProducts} from "../../reducers/Products/productsReducers";
import {productsActionTypes} from "../../actionTypes";
import {TFetching, TGetAllProducts, TGetSingleProduct, THandleError, TPaginate} from "./actionHandlerType";

export const allFetchRequest = (): TFetching => {
    return {
        type: productsActionTypes.FETCH_PRODUCTS
    }
}
export const singleFetchRequest = (): TFetching => {
    return {
        type: productsActionTypes.FETCH_SINGLE_PRODUCT,
    }
}

export const getAllProducts = (data: TProducts): TGetAllProducts => {
    return {
        type: productsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getSingleProduct = (data: TProduct): TGetSingleProduct => {
    return {
        type: productsActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: data
    }
}

export const allProductsHandleError = (message: string): THandleError => {
    return {
        type: productsActionTypes.FETCH_PRODUCTS_FAILURE,
        payload: message
    }
}

export const singleProductHandleError = (message: string): THandleError => {
    return {
        type: productsActionTypes.FETCH_PRODUCTS_FAILURE,
        payload: message
    }
}


export const paginate = (pageNo: number): TPaginate => {
    return {
        type: productsActionTypes.PAGINATE_DATA,
        payload: pageNo
    }
}