import React from 'react';
import {useForm} from "react-hook-form";
import ProductInputForm from "../Components/Forms/ProductInputForm";
import {useRouter} from "next/router";
import {createProduct} from "../Redux/thunk/productThunk";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {TProduct, TProductState} from "../Redux/reducers/Products/productsReducers";
import {TProductActionHandlers} from "../Redux/actions/Products/actionHandlerType";
import {customToast} from "../Utils/customToast";

const AddProduct = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const dispatch = useDispatch<ThunkDispatch<TProductState, any, TProductActionHandlers>>()
    const onSubmit = async (data: TProduct) => {
        try {
            customToast.showLoading('Creating.....', 'createPd')
            const newPd = await dispatch(createProduct({
                title: data.title,
                description: data.description,
                price: data.price,
                category: data.category,
                rating: data.rating,
                stock: data.stock,
                brand: data.brand,
                discountPercentage: data.discountPercentage
            }))
            customToast.success('Successfully Created.', 'createPd')
            reset()
            await router.push(`/product/${newPd._id}`)
        } catch (e) {
            if (e instanceof Error) customToast.showError(e.message, 'createPd')
        }
    }

    return (
        <div className={'d-flex align-items-center'} style={{minHeight: '90vh'}}>
            <div className={'container text-center d-flex justify-content-center h-100'}>
                <div className={''} style={{maxWidth: '50vw', minWidth: '40vw'}}>
                    <ProductInputForm handleSubmit={handleSubmit} onSubmit={onSubmit} register={register}/>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;