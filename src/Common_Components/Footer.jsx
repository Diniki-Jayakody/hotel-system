import React from "react";

import FooterStyles from './Footer.module.css';

function Footer()
{
    return(
        <>
            <div className={FooterStyles.footerBox}>
                <center>
                <table>
                    <row>
                        <td className={FooterStyles.footerContent}>
                            <h3>Logo</h3>
                            <p className={FooterStyles.footerData}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                            </p>
                        </td>
                        <td className={FooterStyles.footerContent}>
                            <h3>COMPANY</h3>
                            <p className={FooterStyles.footerData}>About Us</p>
                            <p className={FooterStyles.footerData}>Legal Information</p>
                            <p className={FooterStyles.footerData}>Contact Us</p>
                            <p className={FooterStyles.footerData}>Blogs</p>
                        </td>
                        <td className={FooterStyles.footerContent}>
                            <h3>CONTACT INFO</h3>
                            <p className={FooterStyles.footerData}>Phone: 0112222783</p>
                            <p className={FooterStyles.footerData}>Email: anniston@gmail.com</p>
                            <p className={FooterStyles.footerData}>Address: 100 Smart Street, Colombo, Sri Lanka.</p>
                        </td>
                    </row>
                </table>
                </center>

            </div>
        </>
    );
}

export default Footer;