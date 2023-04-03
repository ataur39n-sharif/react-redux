import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import {Col, Row} from "react-bootstrap";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://anxious-erin-shrug.cyclic.app/api/products?limit=12&page=1')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);
    console.log(products)
    return (
        <div className={'mt-5 mb-5'}>
            <Row lg={4} md={3} xs={1} sm={2} className={'g-5'}>
                {
                    products.map((product, i) => <Col key={i}><ProductCard product={product}/></Col>)
                }
                {/*<ProductCard/>*/}
            </Row>
        </div>
    );
};

export default Products;