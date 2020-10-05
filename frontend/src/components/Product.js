import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href= ''>
                <Card.Img src={product.image} variant="top" />
            </a>

            <Card.Body>
            <a href= '' as="div">
                <Card.Title>{product.name}</Card.Title>
            </a>

            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>

            <Card.Text>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
