import React from "react";

import {Row, Col} from 'antd';

import food from "../Resources/food.png";
import customer from "../Resources/Cus.png";
import employee from "../Resources/Emp.png";
import payment from "../Resources/Payment.png";
import addRoom from "../Resources/Room plus.png";

import NavBarStyles from './NavBar.module.css';

function NavBar()
{
    const path= '/room_home';
    return(
        <>
            <div className={NavBarStyles.box}>
             <div className={NavBarStyles.logoBox}></div>
               <div className={NavBarStyles.navBox}>
                        <ul className={NavBarStyles.ul}>
                            <li className={NavBarStyles.li}>
                                <a href="/">
                                   <table><tr><td><img src={food} className={NavBarStyles.imgIcon}/></td>
                                   <td><h2 className={NavBarStyles.h2}>Food</h2></td></tr></table> 
                                </a>
                            </li>
                            <li className={NavBarStyles.li}>
                                <a href="/room_home">
                                <table><tr><td><img src={addRoom} className={NavBarStyles.imgIcon}/></td>
                                <td><h2 className={NavBarStyles.h2}>Room</h2></td></tr></table> 
                                </a>
                            </li>
                            <li className={NavBarStyles.li}>
                                <a href="/room_booking_home">
                                <table><tr><td><img src={addRoom} className={NavBarStyles.imgIcon}/></td>
                                <td><h2 className={NavBarStyles.h2}>Bookings</h2></td></tr></table> 
                                </a>
                            </li>
                            <li className={NavBarStyles.li}>
                                <a href="/">
                                <table><tr><td><img src={employee} className={NavBarStyles.imgIcon}/></td>
                                <td><h2 className={NavBarStyles.h2}>Employees</h2></td></tr></table> 
                                </a>
                            </li>
                            <li className={NavBarStyles.li}>
                                <a href="/">
                                <table><tr><td><img src={payment} className={NavBarStyles.imgIcon}/></td>
                                <td><h2 className={NavBarStyles.h2}>Payments</h2></td></tr></table> 
                                </a>
                            </li>
                            <li className={NavBarStyles.li}>
                                <a href="/">
                                <table><tr><td><img src={customer} className={NavBarStyles.imgIcon}/></td>
                                <td><h2 className={NavBarStyles.h2}>Customers</h2></td></tr></table> 
                                </a>
                            </li>
                        
                        </ul>
                        </div>
                      
            </div>
        </>
    );
}

export default NavBar;