import React from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
    const params = useParams();
    const { slug } = params;
    return (
        <>
            <div>ProductScreen Page</div>
            <h1>{slug}</h1>
        </>

    )
}

export default ProductScreen;