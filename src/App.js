import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

import Banner from './Layout/BannerCategory/Banner';
import NavbarHeader from './Layout/Header/Navbar/NavbarHeader';
import Products from './Products/Products';


function App() {
  return (
    <Fragment>
      <NavbarHeader/>
      <Banner />
      <Products/>
    </Fragment>
  );
}

export default App;
