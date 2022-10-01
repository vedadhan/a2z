import React, { useState } from 'react';
import data from '../data';
import StarRating from 'react-svg-star-rating';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    const handleOnClick4 = (rating: number) => {
        setRating4(rating);
    };

    const [rating4, setRating4] = useState(0);
    const [products, setProducts] = useState([]);

    return (
        <div>
            <h1>Featured Products</h1>
            <div className='products'>
                {
                    data.products.map((product) => (
                        <div key={product.slug} className='product'>
                            <Link to={`/product/${product.slug}`}>
                                <img src={product.imageUrl} alt={product.name} />
                            </Link>
                            <div className='product-info'>
                                <Link to={`/product/${product.slug}`}>
                                    <p>{product.name}</p>
                                </Link>
                                <p><StarRating unit='half' handleOnClick={handleOnClick4} initialRating={product.rating} />{product.rating}</p>
                                <p>${product.price}</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeScreen;