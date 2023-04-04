import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import {Col, Row} from "react-bootstrap";
import Pagination from "../Pagination";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(1)
    const [others, setOthers] = useState({});

    useEffect(() => {
        fetch(`https://anxious-erin-shrug.cyclic.app/api/products?limit=4&page=${active}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data?.products)
                setOthers({
                    total: data.total,
                    limit: data.limit,
                    page: data.page,
                })
                setActive(data?.page)
            })
            .catch(err => console.log(err));
    }, [active]);
    console.log(active)
    return (
        <div className={'mt-5 mb-5'}>
            <Row lg={4} md={3} xs={1} sm={2} className={'g-5'}>
                {
                    products.map((product, i) => <Col key={i}><ProductCard product={product}/></Col>)
                }
                {/*<ProductCard/>*/}
            </Row>
            <Pagination data={others} setData={setOthers} status={[active, setActive]}/>
        </div>
    );
};

export default Products;