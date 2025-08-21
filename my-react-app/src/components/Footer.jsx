import React from "react";
import { IoLogoLinkedin } from "react-icons/io";

function Footer(){
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: chaitraputtabudhi@gmail.com</p>
                <p className="footer-contact-access">Mobile: +1(650)-541-1799</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/chai-puttabudhi/"><i><IoLogoLinkedin /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;