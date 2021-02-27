import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"


function Product({ id, image, title, price, rating}) {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to the basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image: image,
                title : title,
                price: price,
                rating: rating,
            }
        })
    };

    return (
        <div className = "product">
            <div className = "product__info">

                <p>{title}</p>
                <p className = "product__image">
                    <small>$</small>
                    <strong>{price}</strong></p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src = {image} alt = "" />
            <button onClick = {addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product
