import { Fragment } from "react";
import category2 from '../../../assets/category2.jpg'
import category3 from '../../../assets/category3.jpg'
import category1 from '../../../assets/category1.jpg'
import classes from './Category.module.css'

const Category=()=>{
    return (
      <Fragment>
        <div className={classes.text}><h1>Our New Offers</h1></div>
        <ul>
        <div className={classes["main-image2"]}>
          <img src={category2} alt="about" />
        </div>
        <div className={classes["main-image2"]}>
          <img src={category3} alt="about" />
        </div>
        </ul>
        <div className={classes["main-image"]}>
          <img src={category1} alt="about" />
        </div>
      </Fragment>
    );
}
export default Category;