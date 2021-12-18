import React from 'react'
import BackImg from "./images/back1.jpg";
import "./Home.css"
import Products from './Products';

function Home() {
    return (
        <React.Fragment>
            <div className='home' style={{ backgroundImage: `url(${BackImg})` }}>
                <div className="banner">
                    <h1>Welcome to our store</h1>
                </div>
            </div>
            <Products />
        </React.Fragment>
    )
}

export default Home
