import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import ProductCategory from './Product-category-search';
import Products from './Products';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';
import ProductDescription from './Product-description';
import Cart from './Cart';
import PropTypes from 'prop-types'

class NavbarClass extends React.Component {

  constructor(props){

    super(props);

   

    this.state={

      cart_items_count : localStorage.getItem("cartItems") ? Object.keys(JSON.parse(localStorage.getItem("cartItems"))).length : 0,
      search_string :""

    }

  }

  render() {

    return (

      <>

<Navbar bg="primary" variant="dark" expand="lg" >
  <Navbar.Brand href="/">GadgetMart</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" active={true}>Home</Nav.Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown" active={true}>
        <NavDropdown.Item href="/products/search/phone">Smartphones</NavDropdown.Item>
        <NavDropdown.Item href="/products/search/camera">Camera</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/Cart" active={true}>My Cart <span class="badge badge-pill badge-dark">{this.state.cart_items_count}</span></Nav.Link>
    </Nav>
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search_string" value={this.state.search_string} onChange={e => this.setState({ search_string: e.target.value })}/>
      <Button variant="outline-dark" type="submit" value="submit">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        <Router>



          <Switch>
            <Route exact path="/products/search/:search_string" component={ProductCategory}></Route>
            <Route path="/products"><Products /></Route>
            <Route path="/product_desc/:id" component={ProductDescription}></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route exact path="/" component={Products} ></Route>
          </Switch>
          
          
        </Router>
      </>



    )


  }
}

export default NavbarClass;