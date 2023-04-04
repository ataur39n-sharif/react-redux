import React from 'react';
import ProductCard from "./ProductCard";
import {Col, Row} from "react-bootstrap";
import Pagination from "../Pagination";

const Products = ({products, others, status}: { products: any[], others?: any | {}, status?: any }) => {

    return (
        <div className={'mt-5 mb-5'}>
            <Row lg={4} md={3} xs={1} sm={2} className={'g-5'}>
                {
                    products.map((product: any, i: number) => <Col key={i}><ProductCard product={product}/></Col>)
                }
                {/*<ProductCard/>*/}
            </Row>
            {
                others?.total &&
                <Pagination data={others} status={status}/>
            }
        </div>
    );
};

export default Products;