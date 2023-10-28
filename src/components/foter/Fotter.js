import React from "react";
import { fbLogo ,
    twitterLogo,
     playLogo,
     instaLogo,
     appStore,
     playStore,
     appGallary 
    } from "../index";


function Footer(){

    return<>
    <div className="foot">
        <section className="POPULAR-CATEGORIES">
            <h3>POPULAR-CATEGORIES</h3>
            <p>Car</p>
            <p>Flat For rents</p>
            <p>Mobile Phone</p>
            <p>Jobs</p>
        </section>
        <section className="TRENDING-SEARCHES">
        <h3>TRENDING-SEARCHES</h3>
            <p>Bikes</p>
            <p>Watches</p>
            <p>Books</p>
            <p>Dogs</p>
        </section>
        <section className="ABOUT-US">
            <h3>ABOUT-US</h3>
            <p>About EMPG</p>
            <p>OLX Blog</p>
            <p>Contact Us</p>
            <p>OLX for Businesses</p>
        </section>
        <section className="OLX">
            <h3>OLX</h3>
            <p>Help</p>
            <p>SiteMap</p>
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
        </section>
        <section className="FOLLOW-US">
            <h3>FOLLOW-US</h3>
            <div className="Images">
                <img src={fbLogo}/>
                <img src={twitterLogo}/>
                <img src={playLogo}/>
                <img src={instaLogo}/>
            </div>
            <div className="play-stores">
                <img src={appStore}/>
                <img src={playStore}/>
                <img src={appGallary}/>
            </div>
        </section>

    </div>
        <div className="last-foot">
            <p>Free Classifieds in Pakistan</p>
            <p> . © 2006-2023 OLX</p>
        </div>
    </>
}

export default Footer;