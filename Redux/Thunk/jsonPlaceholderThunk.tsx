import axios from "axios";
import {fetchPosts} from "../actions/jsonPlaceholderActions";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";

export const loadPosts = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        setTimeout(async () => {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(fetchPosts(data.data))
        }, 3000)
    }
}