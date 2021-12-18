import React, { useEffect } from 'react'
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
import Details from './component/Details';
import Cart from './component/Cart';
import Contact from './component/Contact';
import ErrorPage from './component/ErrorPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  useEffect(() => {
    setTimeout(() => {
      document.title = "Best Prices"
    }, 2000);

    setTimeout(() => {
      document.title = "Please Share This Website"
    }, 3000);
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/"><Home /></Route>
          <Route component={About} path="/about"><About /></Route>
          <Route component={Products} path="/products"><Products /></Route>
          <Route component={Details} path="/details/:id"><Details /></Route>
          <Route component={Cart} path="/cart" />
          <Route component={Contact} path="/contact" />
          <Route component={ErrorPage} path="*" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
