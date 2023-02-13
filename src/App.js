import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import Cart from './Cart/Cart';
import NavbarHeader from './Layout/Header/Navbar/NavbarHeader';
import CartProvider from './store/CartProvider';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Products/Products';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Product1 from './Products/ProductDetails/Product1';




function App() {

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
   
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/products/productdetails" element={<Product1/>} />
    </Routes>
  
  
  </CartProvider>
  </Fragment>
  );
}

export default App;
