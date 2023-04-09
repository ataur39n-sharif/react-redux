import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {productReducer} from "./reducers/Products/productsReducers";
import thunk from "redux-thunk";

export const store: Store = createStore(productReducer, composeWithDevTools(applyMiddleware(thunk)))