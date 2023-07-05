import {AnyAction} from "redux";

const initialState={
    products :[]
}

export const ProductsReducer =(state=initialState, action:AnyAction)=>{
    switch (action.type) {
        default :
            return state
    }
}