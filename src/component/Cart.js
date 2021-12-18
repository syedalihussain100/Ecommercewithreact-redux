import React, { useEffect } from 'react';
import "./Cart.css";
//  import { Data } from './Data';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { connect } from 'react-redux';
import { removeitem, increamentcount, decreament, totalitems } from "../store/action/ItemAction";

function Cart(props) {
    const { removeitem, increamentcount, decreament, totalitems } = props
    useEffect(() => {
        totalitems()
    }, [totalitems])

    const { cart, total, shipping } = props
    console.log('total', total)
    return (
        <div className='cart'>
            <div className="inside-container">
                {cart.length === 0 ?
                    <>
                        <h3 style={{ color: "red" }}>Cart is Currently Empty 🙏</h3>
                    </>
                    :
                    <>
                        <h3>Cart Product</h3>
                        <div className="cart-center">
                            <Scrollbars style={{ width: 700, height: 500 }}>
                                <div className="cart-info">
                                    {cart.map(elm => (
                                        <div className="single-cart" key={elm._id}>
                                            <div className="cart-img">
                                                <img src={elm.img} alt="logo" />
                                            </div>
                                            <div className="cart-title sameItem">
                                                <h4>{elm.title}</h4>
                                            </div>
                                            <div className="counting">
                                                <button onClick={() => {
                                                    decreament(elm._id);
                                                    totalitems()
                                                }}>-</button>
                                                <span>{elm.count}</span>
                                                <button onClick={() => {
                                                    increamentcount(elm._id);
                                                    totalitems()
                                                }}>+</button>
                                            </div>
                                            <div className="price">
                                                <h4>${elm.price * elm.count}</h4>
                                            </div>
                                            <div className="delete-item" onClick={() => {
                                                removeitem(elm._id);
                                                totalitems()
                                            }}>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Scrollbars>
                            <div className="cart-results">
                                <h3>Product Details</h3>
                                <h4>Shipping:{total >= 90 ? <span className='free'>Free🔥🔥🔥</span> : `+${shipping}`} </h4>
                                <h4>Price: <span>$ {total}</span></h4>
                                <h4>Total Price: <span>${total >= 90 ? total : total + shipping}</span></h4>

                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.ProductReducer.cart,
    total: state.ProductReducer.total,
    shipping: state.ProductReducer.shipping
})


export default connect(mapStateToProps, { removeitem, increamentcount, decreament, totalitems })(Cart)
