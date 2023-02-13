import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Cart from './Cart/Cart';
import NavbarHeader from './Layout/Header/Navbar/NavbarHeader';
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
    </CartProvider>
  );
}

export default App;
