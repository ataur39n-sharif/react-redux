import React, {useEffect, useState} from 'react';
import {GetServerSideProps} from "next";
import ProductInputForm from "../../../Components/Forms/ProductInputForm";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

const EditProductById = ({data: fromServer}: { data: any }) => {
    const [data, setData] = useState({
        thumbnail: '',
        title: '',
        description: '',
        price: 0,
        category: '',
        stock: 0,
        brand: '',
        rating: 0,
        discountPercentage: 0
    })

    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        toast.dismiss()
        toast.loading('please wait...')
        fetch(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                toast.dismiss()
            })
            .catch(err => console.log(err))
    }, [])
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm({
    });
    useEffect(() => {
        setValue('title', data?.title);
        setValue('description', data?.description);
        setValue('price', data.price);
        setValue('category', data.category);
        setValue('stock', data.stock);
        setValue('brand', data.brand);
        setValue('discountPercentage', data.discountPercentage);
        setValue('rating', data.rating);
    }, [data])
    const onSubmit = async (data: any) => {
        try {
            toast.loading('please wait...')
            const addProduct = await axios.put(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`, {
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
            toast.success('Success')
            await router.push(`/product/${addProduct.data._id}`)
            console.log(addProduct)
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

export default EditProductById;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params || {};
    const pd = await fetch(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)

    if (!id || (pd.status !== 200)) {
        // handle missing id parameter here, e.g. redirect to an error page
        return {
            redirect: {
                destination: '/error',
                permanent: false,
            },
        };
    }
    const data = await pd.json();
    return {
        props: {
            data
        },
    };
}