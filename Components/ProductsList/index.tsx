import React from 'react';
import {Table} from "react-bootstrap";
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import axios from "axios";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

const ProductsList = ({products, change, setChange}: {
    products: any[],
    change: boolean,
    setChange: any
}) => {

    const router = useRouter()

    const handleDelete = async (id: string) => {
        try {
            toast.loading('please wait...');
            const response = await axios.delete(`https://anxious-erin-shrug.cyclic.app/api/products/${id}`)
            toast.dismiss()
            toast.success('Successfully deleted')
            setChange(!change)
        } catch (e) {
            if (e instanceof Error) console.log(e.message)
        }
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