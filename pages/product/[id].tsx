import React, {useEffect} from 'react';
import Image from "next/image";
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";
import {IoArrowBackCircle} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {TProductState} from "../../Redux/reducers/Products/productsReducers";
import {loadSingleProduct} from "../../Redux/thunk/productThunk";
import {ThunkDispatch} from "redux-thunk";
import {TProductActionHandlers} from "../../Redux/actions/Products/actionHandlerType";
import {singleFetchRequest} from "../../Redux/actions/Products/productActions";
import toast from "react-hot-toast";
import {GetServerSideProps} from "next";

const ProductById = ({data: fromServer}: { data: any }) => {

    const router = useRouter()
    const {id} = router.query

    const {selectedProduct: data, loading} = useSelector((state: TProductState) => state)
    const dispatch = useDispatch<ThunkDispatch<TProductState, any, TProductActionHandlers>>()

    useEffect(() => {
        dispatch(singleFetchRequest())
        typeof (id) === 'string' && dispatch(loadSingleProduct(id))
    }, [id])

    useEffect(() => {
        if (loading) {
            toast.loading('Please wait...')
        } else {
            toast.dismiss()
        }
    }, [loading])

    console.log('product state', data)

    return (
        <div className={'d-flex align-items-center'} style={{minHeight: '90vh'}}>
            <div className={'container text-center d-flex justify-content-center h-100'}>
                {
                    data && <div>
                        {
                            data.thumbnail &&
                            <Image src={data.thumbnail} alt={'product image'} width={700} height={500}
                                   className={'p-3'}/>
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
                }
                {
                    loading && <div className={'d-flex justify-content-center'}>
                        <div className={'spinner-border text-primary'} role={'status'}>
                            <span className={'sr-only'}>Loading...</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductById;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const {id} = context.params || {};
//     const pd = await fetch(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
//
//     if (!id || (pd.status !== 200)) {
//         // handle missing id parameter here, e.g. redirect to an error page
//         return {
//             redirect: {
//                 destination: '/error',
//                 permanent: false,
//             },
//         };
//     }
//     const data = await pd.json();
//     return {
//         props: {
//             data
//         },
//     };
// }