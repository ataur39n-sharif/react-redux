import React, {useEffect} from 'react';
import ProductsList from "../../Components/ProductsList";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {TProductState} from "../../Redux/reducers/Products/productsReducers";
import {ThunkDispatch} from "redux-thunk";
import {TProductActionHandlers} from "../../Redux/actions/Products/actionHandlerType";
import {loadAllProducts} from "../../Redux/thunk/productThunk";
import {allFetchRequest} from "../../Redux/actions/Products/productActions";

const ProductsPage = () => {
    const {products: {data}, loading, reload} = useSelector((state: TProductState) => state)
    const dispatch = useDispatch<ThunkDispatch<TProductState, any, TProductActionHandlers>>()

    useEffect(() => {
        dispatch(allFetchRequest())
    }, []);

    useEffect(() => {
        reload && dispatch(loadAllProducts(1)).then(() => toast.dismiss())
    }, [reload]);

    return (
        <div className={'container'}>
            <ProductsList products={data}/>
        </div>
    );
};

export default ProductsPage;