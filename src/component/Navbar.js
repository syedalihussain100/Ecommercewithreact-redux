import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "./images/logo.png";
import { connect } from "react-redux"


function Navbar(props) {
    const {cart} = props
    const [toggle, setToggle] = useState(false);
    const toggleNav = () => {
        setToggle(!toggle)
    }
    return (
        <div className='navbar'>
            <nav className="nav">
                <div className="logoBtn">
                    <Link to="/"> <img src={Logo} alt="logo" />
                        <p><span>C</span>lothes</p>
                    </Link>
                    <div className="shopping-icon mobile-shopping">
                        <Link to="/cart"> <i class="fas fa-shopping-cart"></i> <span>{cart.length}</span></Link>
                    </div>
                    <div className="hamburger" onClick={toggleNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="links">
                    {/* navbar menu */}
                    <div className={toggle ? "new-links-navigation" : "links-navigation"}>
                        <div className="nav-btn" onClick={toggleNav}>
                            <span >x</span>
                        </div>

                        <ul className="links-nav" onClick={toggleNav}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/products'>Products</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>

                    </div>
                </div>

                <Link to='/cart'>

                    <div className="shopping-icon">
                        <i class="fas fa-shopping-cart"></i> <span>{cart.length}</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.ProductReducer.cart
})

export default connect(mapStateToProps)(Navbar)




// <i class="fas fa-shopping-cart" style="user-select: auto;"></i> 