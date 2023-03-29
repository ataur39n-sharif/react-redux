import {createStore} from "redux";
import todoReducer from "./reducers/todoReducer";
import {composeWithDevTools} from "@redux-devtools/extension";

export const TodoStore = createStore(todoReducer, composeWithDevTools())

