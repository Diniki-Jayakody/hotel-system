import React from "react";
import food from "../Resources/food.png";
import customer from "../Resources/Cus.png";
import employee from "../Resources/Emp.png";
import payment from "../Resources/Payment.png";
import room from "../Resources/Room.png";
import addRooom from "../Resources/Room plus.png";

import NavBarStyles from './NavBar.module.css';

function NavBar()
{
    return(
        <>
            <div className={NavBarStyles.box}>
                <table>
                <tr><td><button className={NavBarStyles.navBtn}><img src={food} width="30" height="30"/>Foods</button></td></tr>
                    <tr><td><button className={NavBarStyles.navBtn}><img src={room} width="30" height="30"/>Rooms</button></td></tr>
                    <tr><td><button className={NavBarStyles.navBtn}><img src={addRooom} width="30" height="30"/> Bookings      </button></td></tr>
                    <tr><td><button className={NavBarStyles.navBtn}><img src={employee} width="30" height="30"/>Employees</button></td></tr>
                    <tr><td><button className={NavBarStyles.navBtn}><img src={payment} width="30" height="30"/>Payments</button></td></tr>
                    <tr><td><button className={NavBarStyles.navBtn}><img src={customer} width="30" height="30"/>Customers</button></td></tr>
                </table>
            </div>
        </>
    );
}

export default NavBar;