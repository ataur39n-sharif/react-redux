import {createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {RootReducer} from "./reducers/rootReducer.ts";


export const store= createStore(RootReducer,composeWithDevTools())