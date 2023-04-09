import React, {useEffect, useState} from 'react';
import {GetServerSideProps} from "next";
import Image from "next/image";
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";
import toast from "react-hot-toast";
import {IoArrowBackCircle} from "react-icons/io5";

const ProductById = ({data: fromServer}: { data: any }) => {
    const [data, setData] = useState({
        thumbnail: '',
        title: '',
        description: '',
        price: '',
        category: '',
        stock: ''
    })

    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        toast.dismiss()
        toast.loading('loading...')
        fetch(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(typeof (data.price))
                setData(data)
                toast.dismiss()
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={'d-flex align-items-center'} style={{minHeight: '90vh'}}>
            <div className={'container text-center d-flex justify-content-center h-100'}>
                <div>
                    {
                        data.thumbnail &&
                        <Image src={data.thumbnail} alt={'product image'} width={700} height={500} className={'p-3'}/>
                    }
                    <h5>Title : {data.title}</h5>
                    <p>Description:{data.description}</p>
                    <p>Price :USD {data.price}</p>
                    <p>Category : {data.category}</p>
                    <p>Stock:{data.stock}</p>
                    <Button variant={'outline-dark'}
                            className={'me-1'}
                            onClick={() => router.push(`/products`)}>
                        <IoArrowBackCircle/>
                    </Button>
                    <Button variant={'outline-dark'} onClick={() => router.push(`/product/edit/${id}`)}>Edit
                        product</Button>

                </div>
            </div>
        </div>
    );
};

export default ProductById;

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