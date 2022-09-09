import React from "react";
import './Header.css';
import Navbar from "./NavBar";


function Header()
{
    return(
        <>
        <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/room_home" className="header-logo">
          <img src={require('./logo.png')} alt='logo' />
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            {/* <Navbar /> */}
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
        
        </section>
        <section className="header-bottom__email">
        
        </section>
      </section>
    </section>
        {/* <div className={HeaderStyles.headerBox}>
            <table>
                <tr>
                
                <td><Link to='/room_home'><button className={HeaderStyles.headerBtn}>Logo</button></Link> </td>
                <td style={{padding:'5vw 0vw 0vw 40vw'}}></td>
                <td><button className={HeaderStyles.headerBtn}>Home</button></td>
                <td><button className={HeaderStyles.headerBtn}>ContactUs</button></td>
                <td><button className={HeaderStyles.headerBtn}>My Profile</button></td>
                <td><button className={HeaderStyles.headerBtn}>Sign Up</button></td>
                <td><button className={HeaderStyles.headerBtn}>Login</button></td>
        
              
                </tr>
            </table>
        </div> */}
        </>
    );
}

export default Header;