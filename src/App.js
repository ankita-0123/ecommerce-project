import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useContext, useState } from 'react';
import Cart from './Cart/Cart';
import NavbarHeader from './Layout/Header/Navbar/NavbarHeader';
import CartProvider from './store/CartProvider';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Products/Products';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Product1 from './Products/ProductDetails/Product1';
import AuthForm from './AuthForm/AuthForm';
import AuthContext from './store/auth-context';
import axios from 'axios';




function App() {

  const AuthCtx=useContext(AuthContext)

  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (<Fragment>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <NavbarHeader onShowCart={showCartHandler}/>
   
   
    <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/products"><Products/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/contactus"><ContactUs/></Route>
        {!AuthCtx.isLoggedIn &&( <Route path='/login'>
          <AuthForm />
        </Route>)}

        <Route path='*'>
          <Redirect to='/'/>
        </Route>

      <Route path="/products/productdetails"><Product1/></Route>
    </Switch>
  
  
  </CartProvider>
  </Fragment>
  );
}

export default App;
