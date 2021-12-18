import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
// import { Data } from './Data';
import "./Details.css"
import { connect } from 'react-redux';
import { additemcart, getitem } from "../store/action/ItemAction"

function Details(props) {
    console.log(props)
    const { id } = useParams();

    const { additemcart, items, getitem } = props;

    let detailsProduct = items.find(item => item._id === parseInt(id))
    useEffect(() => {
        getitem()
    }, [getitem])
    return (
        <div className='details'>
            <div className="inside-container">
                <h3>product details</h3>
                <div className="details-center">
                    <div className="details-img">
                        <img src={`/${detailsProduct.img}`} alt="product" />
                    </div>
                    <div className="details-info">
                        <h4 className="details-title">{detailsProduct.title}</h4>
                        <p className="details-text-info">{detailsProduct.details}</p>

                        <p className="details-price">
                            price: <span>${detailsProduct.price}</span>
                        </p>
                        <div className="details-btn">
                            <Link to="/products"><button>Back to products</button></Link>
                            <button onClick={() => additemcart(detailsProduct._id)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.ProductReducer.items
})
export default connect(mapStateToProps, { additemcart, getitem })(Details)
