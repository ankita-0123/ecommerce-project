import { Fragment } from "react";
import classes from './About.module.css'
import about from '../assets/about.jpg'


const About=()=>{
    return (
      <Fragment>
        <div className={classes.text}>
          <br/><h1>ABOUT US </h1><br/>
          <div className={classes['main-image']}>
        <img src={about} alt='about'/>
        </div>
        </div>
        <div className={classes.text2}>
          <p>
            Therefore, its only natural that their About Us page features a
            compilation of various videos they host. The contents diversity and
            the teams curatorial expertise are another reason to keep you
            browsing. To stay in line with their video-centric aesthetic, the
            text on their page is short and concise. However, it still provides
            enough guidance for browsing the website and even contributing.
            Access the awards section and see why NOWNESS is currently a
            powerhouse in online film and video.
          </p>
        </div>
      </Fragment>
    );
}
export default About;