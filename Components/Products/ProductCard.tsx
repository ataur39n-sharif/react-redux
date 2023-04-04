import React from 'react';
import {Card} from "react-bootstrap";
import {useRouter} from "next/router";

const ProductCard = ({product}: { product: any }) => {
    const router = useRouter();
    return (
        <Card id={'card_section'} className={''} style={{height: '40vh'}}
              onClick={() => router.push(`/product/${product._id}`)}>
            <Card.Img className={'p-2'} src={product.thumbnail} style={{height: "20vh"}}/>
            <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                    {product?.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;