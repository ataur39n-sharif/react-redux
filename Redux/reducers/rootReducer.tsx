import {combineReducers} from "redux";
import TodoReducer, {IofState} from "./todoReducer";
import JsonPlaceholderReducers, {Istate} from "./jsonPlaceholderReducers";

export interface RootState {
    todos: IofState,
    jsonPlaceholder: Istate
}

const rootReducer = combineReducers({
    todos: TodoReducer,
    jsonPlaceholder: JsonPlaceholderReducers
})

export default rootReducer