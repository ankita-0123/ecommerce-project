import { Fragment } from "react";
import Banner from "../../Layout/BannerCategory/Banner";
import Products from "../../Products/Products";
import Category from "./Category/Category";
import classes from './Home.module.css'

const Home=()=>{
    return <Fragment>
        <br/>
        <div className={classes.text}>
        <br/><h1>SHOP FOR OUR NEW TRENDY STOCKS.... </h1><br/>
        </div><br/>
        <Banner/>
        <Products/>
        <Category/>
        <Products/>
    </Fragment>
}
export default Home;