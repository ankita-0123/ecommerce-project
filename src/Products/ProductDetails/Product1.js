import { Fragment } from "react";
import classes from './Product1.module.css'
import shirt1 from '../../assets/shirt1.jpg'
import shirt2 from '../../assets/shirt2.jpg'
import shirt3 from '../../assets/shirt3.jfif'
import shirt4 from '../../assets/shirt4.jfif'
import Products from "../Products";

const Product1 = () => {
    console.log('in side product')
  return (
    <Fragment>
      <div className={classes.text}>
        <h1>Full Sleeve Shirt For Man (20% off) </h1><hr/>
      </div>
      <div className={classes.text2}>
        <h3>Product Images : </h3>
      </div>
      <div>
        <ul>
          <li>
            <div className={classes["main-image"]}>
              <img src={shirt1} alt="clothes" />
            </div>
          </li>
          <li>
            <div className={classes["main-image"]}>
              <img src={shirt2} alt="clothes" />
            </div>
          </li>
          <li>
            <div className={classes["main-image"]}>
              <img src={shirt3} alt="clothes" />
            </div>
          </li>
          <li>
            <div className={classes["main-image"]}>
              <img src={shirt4} alt="clothes" />
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.text}>
        <h1>Products Details</h1><br/>
        <p>
          The Indian Garage Co is daring, bold and just what the modern Indian
          man needs. The fashion forward mans style destination, The Indian
          Garage Co. brings a refreshing spin on mens ethnic wear. Their
          western wear collection of rugged bike jackets, denim shirts and more
          will also bring the right edge to any wardrobe. Choose from a Variety
          of Styles of Men's Wear + Mens Ethnic Wear: Befitting the statement
          styles of the current times, The Indian Garage Co brings to you a wide
          range of mens ethnic wear. Shop for comfortable cotton kurta pyjama
          sets and freshen your closet with some traditional vibes. Men's
          Outerwear: For some rugged outerwear, shop from our exclusive
          collection of leather jackets, and blazers by The Indian Garage Co.
          Walk out with one of these babies looking irresistibly sexy. Mens Top
          Wear: Be in Indian kurta pyjama, short kurtas, relaxed t-shirts, or
          simple shirts AJIO has the best options from The Indian Garage Co..
          Available in several necklines and sizes, this latest collection will
          keep the trends on your toes. Mens Bottom Wear: Whats an outfit
          without some stylish bottom wear to complete it? Shop from The Indian
          Garage Cos extensive range of trousers & pants, pyjamas and shorts
          available in countless prints, sizes and colours to make you stand out
          from the crowd. The Only Fashion Stopover You Need Tired of going all
          the way to the mall to shop? No worries! With AJIO, you can have a
          pick of your favourites from The Indian Garage Co, with only a click
          of a button. You can buy the latest collection of kurta for men,
          leather jackets, simple t-shirts, striking trousers and much more,
          only at AJIO. Online shopping for men has never been this easy!
        </p>
      </div>
      <Products/>
    </Fragment>
  );
};
export default Product1;