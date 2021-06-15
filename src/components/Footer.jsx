import React from 'react'
import "../styles/Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Justeat from "../assets/justeat.jpeg";

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="footer_icon">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <div className="footer_link">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Just It Pro</a>
                    <a href="#" className="link">Blogs</a>
                    <a href="#" className="link">Contact</a>
                </div>
                <hr />
                <div className="footer_image">
                    <img src={Justeat} alt="justeat" />
                </div>
                <div className="footer_text">
                   <p>All Rights Reserved.Copyright &copy;JustEatIt</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
