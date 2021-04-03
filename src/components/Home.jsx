import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import HeaderBg from "../assets/header_bg.png";
import Leaf from "../assets/leaf.png";
import Tomato from "../assets/tomato.png";
import Chilli from "../assets/chilli.png";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SideBg from "../assets/sidebg.jpg";
import MainMenu from "./MainMenu";
import Menu1 from "../assets/MenuOne.jpeg";
import Menu2 from "../assets/MenuTwo.jpeg";
import Menu3 from "../assets/MenuThree.jpeg";
import Menu4 from "../assets/MenuFourth.jpeg";
import Blog from "./Blogs";
import FoodGallery from "./FoodGallery";
import Review from "../components/Review";
import Footer from "../components/Footer";

const Home = () => {

    const handleClick = () => {
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
                        <Link to="/ordernow"><button onClick={handleClick}>Order Now</button></Link>
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
            <div className="main_menu">
                <MainMenu image={Menu1}
                text="Order Food Online" />
                <MainMenu image={Menu2}
                text="Go out for a meal" />
                <MainMenu image={Menu3}
                text="Nightlife & Clubs" />
                <MainMenu image={Menu4}
                text="Just Eat It Pro" />
            </div>
            <div className="food_blogs">
                <Blog />
            </div>
            <div className="food_gallery_items">
                <FoodGallery />
            </div>
            <div className="client_review_items">
                <Review />
            </div>
            <div className="home_food">
                <Footer />
            </div>
        </div>
    )
}

export default Home;