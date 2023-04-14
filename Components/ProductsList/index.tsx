import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import {useRouter} from "next/router";
import {TProduct, TProductState} from "../../Redux/reducers/Products/productsReducers";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {TProductActionHandlers} from "../../Redux/actions/Products/actionHandlerType";
import {deleteProduct} from "../../Redux/thunk/productThunk";
import {deleteProductRequest} from "../../Redux/actions/Products/productActions";
import {customToast} from "../../Utils/customToast";

const ProductsList = ({products}: {
    products: TProduct[],
}) => {

    const router = useRouter()
    const productState = useSelector((state: TProductState) => state)
    const dispatch = useDispatch<ThunkDispatch<TProductState, any, TProductActionHandlers>>()

    const handleDelete = async (id: string) => {
        dispatch(deleteProductRequest())
        dispatch(deleteProduct(id))
    }

    return (
        <div className={'mt-5'}>
            <Table striped bordered hover className={'text-center'}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    products?.map((product: any, id) => {
                        return (
                            <tr key={id}>
                                <td>{product._id} ({id + 1})</td>
                                <td
                                    onClick={() => router.push(`/product/${product._id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {product.title}
                                </td>
                                <td>USD {product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <FaRegEdit
                                        className={'me-2'}
                                        type={'button'}
                                        onClick={() => router.push(`/product/edit/${product._id}`)}
                                    />
                                    <RiDeleteBin6Fill
                                        type={'button'}
                                        onClick={() => handleDelete(product._id)}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
};

export default ProductsList;