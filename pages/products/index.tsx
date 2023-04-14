import React, {useEffect, useState} from 'react';
import ProductsList from "../../Components/ProductsList";
import {useDispatch, useSelector} from "react-redux";
import {TProduct, TProductState} from "../../Redux/reducers/Products/productsReducers";
import {ThunkDispatch} from "redux-thunk";
import {TProductActionHandlers} from "../../Redux/actions/Products/actionHandlerType";
import {loadAllProducts} from "../../Redux/thunk/productThunk";

const ProductsPage = () => {
    const [data, setData] = useState<TProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const {reload} = useSelector((state: TProductState) => state)
    const dispatch = useDispatch<ThunkDispatch<TProductState, any, TProductActionHandlers>>()

    useEffect(() => {
        fetchAllProducts()
    }, [reload]);

    const fetchAllProducts = async () => {
        const list = await dispatch(loadAllProducts())
        list && setData(list)
        setLoading(false)
    }

    return (
        <div className={'container'}>
            {
                data.length > 0 && <ProductsList products={data}/>
            }
            {
                loading && <div className={'d-flex justify-content-center'}>
                    <div className={'spinner-border text-primary'} role={'status'}>
                        <span className={'sr-only'}></span>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductsPage;