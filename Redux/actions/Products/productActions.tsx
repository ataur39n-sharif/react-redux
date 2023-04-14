import {TProduct, TProducts} from "../../reducers/Products/productsReducers";
import {productsActionTypes} from "../../actionTypes";
import {
    TDeleteProductRequest,
    TDeleteProductSuccess,
    TFetching,
    TGetAllProducts,
    TGetSingleProduct,
    THandleError,
    TPaginate
} from "./actionHandlerType";

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

export const deleteProductRequest = (): TDeleteProductRequest => {
    return {
        type: productsActionTypes.DELETE_PRODUCT
    }
}

export const deleteProductSuccess = (): TDeleteProductSuccess => {
    return {
        type: productsActionTypes.DELETE_PRODUCT_SUCCESS
    }
}

export const deleteProductFailure = (message: string): THandleError => {
    return {
        type: productsActionTypes.DELETE_PRODUCT_FAILURE,
        payload: message
    }
}