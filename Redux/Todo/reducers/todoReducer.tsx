import {AnyAction} from "redux";
import {TodoActions} from "../actionTypes";

export interface IofState {
    taskList: string[] | [],
    isLoading: boolean
}

export const initialState: IofState = {
    taskList: [],
    isLoading: false,
}

const todoReducer = (store: IofState = initialState, action: AnyAction) => {
    const {type, payload} = action
    switch (type) {
        case TodoActions.ADD_TODO:
            return {
                ...store,
                taskList: [...store.taskList, payload]
            }
        default:
            return store
    }
}


export default todoReducer