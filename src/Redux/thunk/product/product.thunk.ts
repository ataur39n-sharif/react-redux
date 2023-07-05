import axios from "axios";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {TRootState} from "../../reducers/rootReducer.ts";
import {CartActionTypes} from "../../actionTypes/cart.actionTypes.ts";

export const fetchProducts = () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return async (dispatch: ThunkDispatch<TRootState, any, AnyAction>, getState: () => TRootState) => {
        const {data} = await axios.get(`https://anxious-erin-shrug.cyclic.app/api/products?limit=4&page=${Math.round(Math.random() * 10)}`)
        const modifiedData: any = [];
        data.products?.map((product: any) => {
            modifiedData.push({...product, quantity: 1})
        })
        dispatch({type: CartActionTypes.LOAD_CART_PRODUCTS, payload: modifiedData})
    }
}