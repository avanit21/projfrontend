import React from 'react'
import { API } from '../../backend';
import { Card } from 'react-bootstrap'

const ImageHepler = ({product}) => {
    const imageurl= product ? `${API}/product/photo/${product._id}` : `data:image/jpeg;base64,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`;


    return (
            <Card.Img
                src={imageurl}
                variant='top'
                alt={product.name} fluid
            />
    )
}

export default ImageHepler;
