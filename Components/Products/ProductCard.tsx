import React from 'react';
import {Card} from "react-bootstrap";

const ProductCard = ({product}: { product: any }) => {
    return (
        <Card className={''} style={{minHeight: '100%'}}>
            <Card.Img src={product.thumbnail}/>
            <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;