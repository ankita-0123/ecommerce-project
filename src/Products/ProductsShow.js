import './ProductsShow.module.css'
import ProductsAddCartForm from './ProductsAddCartForm'
import { Link,Route,Routes } from 'react-router-dom';
import Product1 from './ProductDetails/Product1';
import { Fragment } from 'react';

const ProductsShow =(props)=>{
    const price = `$${props.price.toFixed(2)}`;
    return <Fragment>
        <li>
          <Link to="/products/productdetails">
            <div>{props.imageUrl}</div>
            <br />
            <div>
              <h3>{props.title}</h3>
              <div>{price}</div>
            </div>
          </Link>
          <div>
            <ProductsAddCartForm id={props.id} item={props} />
          </div>
        </li>
        <Routes>
          <Route path="'/products/productdetails'" element={<Product1 />} />
        </Routes>
        </Fragment>

}
export default ProductsShow;