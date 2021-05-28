import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductCategory from './Product-category-search';
import Products from './Products';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';

class NavbarClass extends React.Component {

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
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-dark">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        <Router>



          <Switch>
            <Route exact path="/products/search/:search_string" component={ProductCategory}></Route>
            <Route path="/products"><Products /></Route>
            <Route exact path="/" component={Products} ></Route>
          </Switch>
          
        </Router>
      </>



    )


  }
}

export default NavbarClass;