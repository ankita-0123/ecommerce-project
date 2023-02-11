import { Fragment } from 'react';
import summer from '../../assets/summer.jpg'
import classes from './Banner.module.css'

const Banner=()=>{
    return <Fragment><div className={classes['main-image']}>
        <img src={summer} alt='Discount Offer'/>
    </div>
    <div className={classes.text}><br/><br/><h1> OUR BEST SELLING PRODUCTS </h1></div>
    </Fragment>
}
export default Banner;