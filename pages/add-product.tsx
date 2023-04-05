import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import ProductInputForm from "../Components/Forms/ProductInputForm";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm();
    const router = useRouter()
    const onSubmit = async (data: any) => {
        try {
            toast.loading('Please wait...')
            const addProduct = await axios.post('https://anxious-erin-shrug.cyclic.app/api/products/', {
                title: data.title,
                description: data.description,
                price: Number(data.price),
                category: data.category,
                rating: Number(data.rating),
                stock: Number(data.stock),
                brand: data.brand,
                discountPercentage: Number(data.discountPercentage)
            })
            toast.dismiss()
            toast.success('New Product Added')
            await router.push(`/product/${addProduct.data._id}`)
            console.log(addProduct)
            reset()
        } catch (e) {
            if (e instanceof Error) alert(e.message)
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