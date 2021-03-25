import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import HeaderBg from "../assets/header_bg.png";
import Leaf from "../assets/leaf.png";
import Tomato from "../assets/tomato.png";
import Chilli from "../assets/chilli.png";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SideBg from "../assets/sidebg.jpg";

const Home = () => {

    const handleClick = () => {
        <Redirect to="#ordernow" />
    }

    return (
        <div className="home">
            <div className="home_banner">
                <div className="home_left">
                    <div className="home_left_image1">
                        <img src={Leaf} alt="leaf" style={{ height: "20px" }} />
                        <img src={Chilli} alt="chilli" style={{ marginLeft: "227px", height: "20px" }} />
                    </div>
                    <div className="home_heading">
                        <h1>Have No time <br />to prepare<span> food</span>?</h1>
                        <div className="home_text">
                            <p>Choose one of our plans, enter delivery time
                        and enjoy delicious food without leaving your place!</p>
                        </div>
                    </div>
                    <div className="home_button">
                        <a href="#ordernow"><button onClick={handleClick}>Order Now</button></a>
                        <span><NavigateNextIcon /></span>
                    </div>
                    <div className="home_left_image2">
                        <img src={Tomato} alt="tomato" style={{ height: "40px", marginLeft: "10px", marginTop: "5px" }} />
                    </div>
                    <div className="social_icons">
                        <TwitterIcon className="icon" />
                        <InstagramIcon className="icon" />
                        <FacebookIcon className="icon" />
                    </div>
                </div>
                <div className="home_right">
                    <img src={HeaderBg} alt="headerLogo" style={{
                        position: "absolute",
                        right: "0", top: "0", height: "90%", zIndex: "1", filter: "brightness(74%)"
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Home;