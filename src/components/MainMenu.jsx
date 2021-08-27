import React from 'react'
import "../styles/MainMenu.css";
import {Link} from "react-router-dom";

const MainMenu = (props) => {
    return (
        <div className="main_menu">
            <div classname="main_menu_image">
                <img src={props.image} alt="onlineFood" />
            </div>
            <div>
                <Link to="/ordernow"><button>{props.text}</button></Link>
            </div>
        </div>
    )
}

export default MainMenu
