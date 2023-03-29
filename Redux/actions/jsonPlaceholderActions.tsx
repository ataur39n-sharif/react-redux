import {JsonPlaceholderActionTypes} from "../actionTypes";
import {Ipost} from "../reducers/jsonPlaceholderReducers";

export const fetchPosts = (data: Ipost[]) => {
    return {
        type: JsonPlaceholderActionTypes.GET_DATA,
        payload: data
    }
}

export const showLoading = () => {
    return {
        type: JsonPlaceholderActionTypes.LOADING
    }
}