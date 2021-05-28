import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductCategory from './Product-category-search';
import Products from './Products';

class Navbar extends React.Component{

    render(){

        return (

            <>
<Router>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
  <a className="navbar-brand" href="/">GadgetMart</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/products">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/products/search/camera">Smartphones</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>


<Switch>

          
          <Route exact path="/products/search/:search_string" component={ProductCategory}></Route> 
          <Route path="/products"><Products/></Route>
          <Route exact path="/" component={Products} ></Route>
          
          
        </Switch>
</Router>
            </>



        )


    }
}

export default Navbar;