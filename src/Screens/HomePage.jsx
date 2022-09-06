import React from "react";

import HomePageStyles from './HomePage.module.css';

import {Link} from 'react-router-dom';

import Header from '../Common_Components/Header'
import Footer from '../Common_Components/Footer'

function HomePage()
{
    return(
        <>
        <div className={HomePageStyles.screen}>
           <div><Header/></div> 
           <div>
                <Link to='/add_booking'><button>Add booking</button></Link>  
           </div>
           <div><Footer/></div> 
        </div>
        </>
    );
}

export default HomePage;