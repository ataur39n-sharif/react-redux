import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store