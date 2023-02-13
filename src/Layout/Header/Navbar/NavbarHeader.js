import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartButton from '../CartButton.js/CartButton';

import { Link} from 'react-router-dom';
// import Home from '../../../Pages/Home/Home';
// import Products from '../../../Products/Products';
// import About from '../../../Pages/About';
// import ContactUs from '../../../Pages/ContactUs/ContactUs';
// import Product1 from '../../../Products/ProductDetails/Product1';
import { Fragment } from 'react';



const NavbarHeader=(props)=> {
  return (
    <Fragment>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><h2>Sharpner</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="products">Store</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartButton onClick={props.onShowCart}/>
    </Navbar>

    {/* <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/page" element={<Product1/>} />
        <Route path="'/products/productdetails'" element={<Product1/>} />
      </Routes>
    </div> */}
    </Fragment>
  );
}

export default NavbarHeader;