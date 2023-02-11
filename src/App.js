import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Cart from './Cart/Cart';
import Banner from './Layout/BannerCategory/Banner';
import NavbarHeader from './Layout/Header/Navbar/NavbarHeader';
import Products from './Products/Products';
import CartProvider from './store/CartProvider';


function App() {

  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <NavbarHeader onShowCart={showCartHandler}/>
      <Banner />
      <Products/>
    </CartProvider>
  );
}

export default App;
