import ProductsShow from "./ProductsShow";
import shirt1 from '../assets/shirt1.jpg'
import shirt2 from '../assets/shirt2.jpg'
import shirt3 from '../assets/shirt3.jfif'
import shirt4 from '../assets/shirt4.jfif'
import classes from './Products.module.css'
import { Fragment } from "react";
// import Banner from "../Layout/BannerCategory/Banner";


const productsArr = [
  { id:'p1',
    title: "Full Sleeve Shirt",
    price: 100,
    imageUrl: <div className={classes['main-image']}>
    <img src={shirt1} alt='Shirts'/>
</div>,
  },
  { id:'p2',
    title: "Premium Men Shirt",
    price: 50,
    imageUrl: <div className={classes['main-image']}>
    <img src={shirt2} alt='Shirts'/>
</div>,
  },
  { id:'p3',
    title: "White Men Shirt",
    price: 70,
    imageUrl: <div className={classes['main-image']}>
    <img src={shirt3} alt='Shirts'/>
</div>,
  },
  { id:'p4',
    title: "Black Mens Shirt",
    price: 100,
    imageUrl:<div className={classes['main-image']}>
    <img src={shirt4} alt='Shirts'/>
</div>,
  },
];



const Products = (props) => {
    const productsList=productsArr.map((product2)=>(
        <ProductsShow
        key={product2.id}
        id={product2.id}
        imageUrl={product2.imageUrl}
        title={product2.title}
        price={product2.price}
      />
    ));

  return (
    <Fragment>
      <div className={classes.text}><br/><br/><br/><h1> OUR BEST SELLING PRODUCTS </h1></div>
      <ul>{productsList}</ul>
    </Fragment>
  );
};
export default Products;
