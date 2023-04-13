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
/*products type*/
export type TProducts = {
    data: TProduct[],
    limit?: number,
    page?: number,
    total?: number,
}
/*type of product state*/
export type TProductState = {
    products: TProducts,
    selectedProduct: TProduct | null,
    message: string | null,
    loading: boolean,
    error: string | null,
    reload: boolean
}

export const defaultProducts = {data: [], limit: 4, page: 1}

/* initial products state*/
const initialState: TProductState = {
    products: defaultProducts,
    selectedProduct: null,
    message: null,
    loading: false,
    error: null,
    reload: false
}

export const productReducer = (state: TProductState = initialState, action: AnyAction) => {
    const {type, payload} = action
    const {
        FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
        FETCH_SINGLE_PRODUCT, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILURE,
        PAGINATE_DATA, DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
        UPDATE_PRODUCT, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_SUCCESS
    } = productsActionTypes

    switch (type) {
        case FETCH_SINGLE_PRODUCT :
            return {
                ...state,
                selectedProduct: null,
                loading: true,
                error: null
            }
        case  FETCH_PRODUCTS:
            return {
                ...state,
                products: defaultProducts,
                selectedProduct: null,
                loading: true,
                error: null,
                reload: true
            }
        case  DELETE_PRODUCT:
            return {
                ...state,
                loading: true,
            }
        case  DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                reload: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null,
                reload: false
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: defaultProducts,
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
        case PAGINATE_DATA: {
            return {
                ...state,
                products: {
                    ...state.products,
                    page: payload
                },
                reload: true
            }
        }
        default:
            return state
    }
}