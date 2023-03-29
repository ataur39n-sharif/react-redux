import {AnyAction} from "redux";
import {JsonPlaceholderActionTypes} from "../actionTypes";

export interface Ipost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface Istate {
    posts: Ipost[],
    loading: boolean
}

const initialState: Istate = {
    posts: [],
    loading: false
}

const JsonPlaceholderReducers = (store: Istate = initialState, action: AnyAction) => {
    const {type, payload} = action

    switch (type) {
        case JsonPlaceholderActionTypes.LOADING:
            return {
                ...store,
                loading: true
            }
        case JsonPlaceholderActionTypes.GET_DATA:
            return {
                ...store,
                posts: payload,
                loading: false
            }
        case JsonPlaceholderActionTypes.DELETE_DATA:
            return {
                ...store
            }
        default:
            return store
    }
}

export default JsonPlaceholderReducers