import React from 'react'
// import ApartmentIcon from '@mui/icons-material/Apartment';
import {olxLogo,
    carLogo,
    buildingLogo,
    olxLogo2,
    searchLogo,
    searchIcon
} from '../index'

function Head(){


    return<>
    <div className="main">
            <div className="upper">
                <div className="icon-1">
                    <img src={olxLogo} alt=""/>
                </div>
                <div className="icon-2">
                    <img src={carLogo} alt=""/>
                    <p>Motors</p>
                </div>
                <div className="icon-3">
                    <img src={buildingLogo} alt=""/>
                    <p>property</p>
                </div>
            </div>
            <div className="lower">
                <div className="input-1">
                    <img src={olxLogo2} alt=""/>
                </div>
                <div className="input-2">
                    <img src={searchLogo} className="serach-icon"/>
                    <input type="text" className="search" placeholder="Search city,area or locality"/>
                </div>
                <div className="input-3">
                    <input type="text" className="Find" placeholder="Find Cars,Mobile Phone and more...."/>
                    <img src={searchIcon} className="icon-search"/>
                </div>
                <div className="input-4">
                    <p className="login"><a href="#">Login</a></p>
                </div>
                <div className="input-5">
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <p className="sell"><b>+</b>SELL</p>
                </div>
            </div>
        </div>
        <div className="nav">
            <div className="categories">
                <p> All Categories</p>
            </div>
            <ul>
                <li><a href="#"> Mobile Phones </a></li>
                <li><a href="#">Cars</a></li>
                <li><a href="#">Motorcycles</a></li>
                <li><a href="#">Houses </a></li>
                <li><a href="#">Tv-Video-Audio </a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Land & Plots</a></li>
            </ul>
        </div>
    </>
}

export default Head;