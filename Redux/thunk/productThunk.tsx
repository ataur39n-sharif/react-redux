import axios from "axios";
import {ThunkDispatch} from "redux-thunk";
import {
    allProductsHandleError,
    deleteProductSuccess,
    getAllProducts,
    getSingleProduct
} from "../actions/Products/productActions";
import {TProduct, TProductState} from "../reducers/Products/productsReducers";
import {TProductActionHandlers} from "../actions/Products/actionHandlerType";
import {customToast} from "../../Utils/customToast";

export const loadAllProducts = () => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            const {
                data: {
                    products,
                    limit,
                    page,
                    total
                }
            } = await axios.get(`https://anxious-erin-shrug.cyclic.app/api/products`)
            customToast.dismiss('allProducts')
            return products
        } catch (e) {
            if (e instanceof Error) customToast.showError(e.message, 'allProducts')
        }
    }
}

export const loadProducts = (pageNo: number, dataLimit?: number) => {
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
            dispatch(getAllProducts({data: products, total, limit, page}))
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
            return response.data
        } catch (e) {
            if (e instanceof Error) customToast.showError(e.message, 'product')
        }
    }
}

export const createProduct = (data: TProduct) => {
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>) => {
        const {data: newPd} = await axios.post('https://anxious-erin-shrug.cyclic.app/api/products/', data)
        return newPd
    }
}

export const deleteProduct = (id: string) => {
    customToast.showLoading('Please wait...', 'deletePd')
    return async (dispatch: ThunkDispatch<TProductState, any, TProductActionHandlers>, getState: () => TProductState) => {
        try {
            await axios.delete(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            customToast.success('Deleted successfully', 'deletePd')
            dispatch(deleteProductSuccess())
        } catch (e) {
            if (e instanceof Error) customToast.showError(e.message, 'deletePd')
        }
    }
}