import { Fragment } from 'react';
import summer from '../../assets/summer.jpg'
import classes from './Banner.module.css'

const Banner=()=>{
    return <Fragment><div className={classes['main-image']}>
        <img src={summer} alt='Discount Offer'/>
    </div>
    </Fragment>
}
export default Banner;