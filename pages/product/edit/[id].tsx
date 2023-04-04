import React, {useEffect, useState} from 'react';
import {GetServerSideProps} from "next";
import ProductInputForm from "../../../Components/Forms/ProductInputForm";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

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
        fetch(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm({
        // defaultValues: {
        //     title: data?.title,
        //     description: data?.description,
        //     price: data.price,
        //     category: data.category,
        //     stock: data.stock,
        //     brand: data.brand,
        //     discountPercentage: data.discountPercentage,
        //     rating: data.rating
        // }
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
        console.log(data)
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