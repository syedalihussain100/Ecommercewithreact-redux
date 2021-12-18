import React, { useEffect } from 'react'
import Product from "./Product";
// import { Data } from './Data';
import "./Products.css";
import { getitem, additemcart, bannerclose } from "../store/action/ItemAction";
import { connect } from 'react-redux';


function Products(props) {

  const { items, getitem, additemcart, bannerclose } = props

  useEffect(() => {
    getitem()
  }, [getitem])

  const additemcarts = (id) => {
    additemcart(id);


    setTimeout(() => {
      bannerclose()
    }, 2000);
  }

  return (
    <div className='products'>
      <div className="inside-containe">
        <h3>Products</h3>

        <div className="products-center">
          {
            items.map((product) => {
              return <Product product={product} key={product._id} additemcart={() => additemcarts(product._id)} isInCart={product.isInCart} />
            })
          }
        </div>

      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  items: state.ProductReducer.items
})
export default connect(mapStateToProps, { getitem, additemcart, bannerclose })(Products);
