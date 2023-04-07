import React, {useEffect, useState} from 'react';
import ProductsList from "../../Components/ProductsList";
import toast from "react-hot-toast";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [change, setChange] = useState(false)

    useEffect(() => {
        toast.dismiss()
        toast.loading('Please wait....')
        fetch(`https://anxious-erin-shrug.cyclic.app/api/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data?.products)
                toast.dismiss();
            })
            .catch(err => console.log(err));
    }, [change]);

    return (
        <div className={'container'}>
            <ProductsList products={products} change={change} setChange={setChange}/>
        </div>
    );
};

export default ProductsPage;