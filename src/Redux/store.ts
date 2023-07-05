import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {RootReducer} from "./reducers/rootReducer.ts";
import thunk from "redux-thunk";

export const store= createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))
