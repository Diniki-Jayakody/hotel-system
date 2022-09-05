import React from "react";
import { Link} from "react-router-dom";
import { Space } from "antd";
import food from "../Resources/food.png";
import customer from "../Resources/Cus.png";
import employee from "../Resources/Emp.png";
import payment from "../Resources/Payment.png";
import addRooom from "../Resources/Room plus.png";

import NavBarStyles from './NavBar.module.css';

function NavBar()
{
    const path= '/room_home';
    return(
        <>
            <div className={NavBarStyles.box}>
                <table>
                <tr className={NavBarStyles.tRow}><td><button className={NavBarStyles.navBtn}><img src={food} width="30" height="30"/>Foods</button></td></tr>
                <tr className={NavBarStyles.tRow}><td><Link to={path}><button className={NavBarStyles.navBtn}><img src={addRooom} width="30" height="30"/>Rooms</button></Link></td></tr> 
                    <tr className={NavBarStyles.tRow}><td><button className={NavBarStyles.navBtn}><img src={addRooom} width="30" height="30"/> Bookings      </button></td></tr>
                    <tr className={NavBarStyles.tRow}><td><button className={NavBarStyles.navBtn}><img src={employee} width="30" height="30"/>Employees</button></td></tr>
                    <tr className={NavBarStyles.tRow}><td><button className={NavBarStyles.navBtn}><img src={payment} width="30" height="30"/>Payments</button></td></tr>
                    <tr className={NavBarStyles.tRow}><td><button className={NavBarStyles.navBtn}><img src={customer} width="30" height="30"/>Customers</button></td></tr>
                </table>
            </div>
        </>
    );
}

export default NavBar;

{/* <tr><Link to="/room_home"><button className={NavBarStyles.navBtn}>Rooms</button></Link></tr> */}