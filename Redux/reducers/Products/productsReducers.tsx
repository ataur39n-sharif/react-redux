import {productsActionTypes} from "../../actionTypes";
import {AnyAction} from "redux";

/*product type*/
export type TProduct = {
    _id: string,
    thumbnail: string,
    title: string,
    description: string,
    price: number | null,
    category: string | null,
    stock: number | null,
    images: string[] | null,
    discountPercentage: number | null,
    rating: number | null,
    brand: string
}

/*type of product state*/
export type TProductState = {
    products: TProduct[],
    selectedProduct: TProduct | null,
    message: string | null,
    loading: boolean,
    error: string | null
}

/* initial products state*/
const initialState: TProductState = {
    products: [],
    selectedProduct: null,
    message: null,
    loading: false,
    error: null
}

export const productReducer = (state: TProductState = initialState, action: AnyAction) => {
    const {type, payload} = action
    const {
        FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
        FETCH_SINGLE_PRODUCT, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILURE
    } = productsActionTypes

    switch (type) {
        case FETCH_SINGLE_PRODUCT || FETCH_PRODUCTS:
            return {
                ...state,
                selectedProduct: null,
                products: [],
                loading: true,
                error: null
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                loading: false,
                error: payload
            }
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                selectedProduct: payload,
                loading: false,
                error: null
            }
        case FETCH_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                selectedProduct: null,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}