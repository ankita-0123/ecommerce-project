import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Cart from './Cart/Cart';
// import Banner from './Layout/BannerCategory/Banner';
import NavbarHeader from './Layout/Header/Navbar/NavbarHeader';
import Products from './Products/Products';
import CartProvider from './store/CartProvider';
import About from './Pages/About';
import Home from './Pages/Home/Home';


// //alternating way import createRoutesFromElements and Route to start this
// const routeDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Products/>}/>
//       <Route path="about" element={<About/>}/>
//   </Route>
// )

// const router=createBrowserRouter(routeDefinitions);


const router=createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/products',element:<Products/>},
  {path:'/about',element:<About/>},
])


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
      <RouterProvider router={router}/>
    </CartProvider>
  );
}

export default App;
