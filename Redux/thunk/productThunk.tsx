import axios from "axios";
import {ThunkDispatch} from "redux-thunk";
import {
    allProductsHandleError,
    deleteProductFailure,
    deleteProductSuccess,
    getAllProducts,
    getSingleProduct,
    singleProductHandleError
} from "../actions/Products/productActions";
import {TProductState} from "../reducers/Products/productsReducers";
import {TProductActionHandlers} from "../actions/Products/actionHandlerType";

export const loadAllProducts = (pageNo: number, dataLimit?: number) => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            const {
                data: {
                    products,
                    limit,
                    page,
                    total
                }
            } = await axios.get(`https://anxious-erin-shrug.cyclic.app/api/products?limit=${dataLimit}&page=${pageNo}`)
            return dispatch(getAllProducts({data: products, total, limit, page}))
        } catch (e) {
            if (e instanceof Error) dispatch(allProductsHandleError(e.message))
        }
    }
}


export const loadSingleProduct = (id: string) => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            const response = await axios.get(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            dispatch(getSingleProduct(response.data))
        } catch (e) {
            if (e instanceof Error) dispatch(singleProductHandleError(e.message))
        }
    }
}


export const deleteProduct = (id: string) => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            const response = await axios.delete(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            dispatch(deleteProductSuccess())
        } catch (e) {
            if (e instanceof Error) dispatch(deleteProductFailure(e.message))
        }
    }
}