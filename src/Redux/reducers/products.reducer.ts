import {AnyAction} from "redux";

export type TProduct= {
    _id?: string;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
}

export type TProductState={
    products: TProduct[]
}

const initialState:TProductState={
    products :[]
}

export const ProductsReducer =(state=initialState, action:AnyAction)=>{
    switch (action.type) {
        default :
            return state
    }
}