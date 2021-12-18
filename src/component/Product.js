import React from 'react';
import { Link } from "react-router-dom";

function Product(props) {
    console.log(props.product);
    const { product, additemcart, isInCart } = props
    return (
        <div className='product'>
            <div className="box-img">
                <Link to={`/details/${product._id}`}>
                    <img src={product.img} alt="logo" /></Link>
            </div>
            <div className="product-details">
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
            </div>
            <div className="product-btn">
                <button onClick={additemcart}>Add To Cart</button>
            </div>
            <div className={isInCart ? "inCart newInCart" : "inCart"}>
                <span>Already in Cart</span>
            </div>
        </div>
    )
}

export default Product
