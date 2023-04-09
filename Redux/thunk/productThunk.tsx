import axios from "axios";
import {ThunkDispatch} from "redux-thunk";
import {
    allProductsHandleError,
    fetchRequest,
    getAllProducts,
    getSingleProduct,
    singleFetchRequest,
    singleProductHandleError
} from "../actions/Products/productActions";
import {TProductState} from "../reducers/Products/productsReducers";
import {TProductActionHandlers} from "../actions/Products/actionHandlerType";

export const loadAllProducts = () => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            dispatch(fetchRequest())
            const response = await axios.get('/api/products')
            dispatch(getAllProducts(response.data))
        } catch (e) {
            if (e instanceof Error) dispatch(allProductsHandleError(e.message))
        }
    }
}


export const loadSingleProduct = (id: string) => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            dispatch(singleFetchRequest())
            const response = await axios.get(`/api/products/${id}`)
            dispatch(getSingleProduct(response.data))
        } catch (e) {
            if (e instanceof Error) dispatch(singleProductHandleError(e.message))
        }
    }
}