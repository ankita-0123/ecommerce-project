import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartButton from '../CartButton.js/CartButton';
import { useHistory } from 'react-router-dom';
import { Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import classes from './NavbarHeader.module.css'



const NavbarHeader=(props)=> {
  const history=useHistory();

const AuthCtx=useContext(AuthContext);
const isLoggedIn=AuthCtx.isLoggedIn;

    const logoutHandler=()=>{
      AuthCtx.logout();
      history.replace('/login')
      console.log('history replace active')
    }

  return (
    <Fragment>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><h2>Sharpner</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {isLoggedIn && <Nav.Link as={Link} to="/products">Store</Nav.Link>}
            {!isLoggedIn && <Nav.Link as={Link} to="/login">Sotre</Nav.Link>}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {console.log(isLoggedIn)}
      {isLoggedIn && (<button className={classes.button} onClick={logoutHandler}>LOGOUT</button>)}
      <CartButton onClick={props.onShowCart}/>
    </Navbar>

    </Fragment>
  );
}

export default NavbarHeader;