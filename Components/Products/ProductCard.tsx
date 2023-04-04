import React from 'react';
import {Card} from "react-bootstrap";

const ProductCard = ({product}: { product: any }) => {
    return (
        <Card id={'card_section'} className={''} style={{height: '40vh'}}>
            <Card.Img className={'p-2'} src={product.thumbnail} style={{height: "20vh"}}/>
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