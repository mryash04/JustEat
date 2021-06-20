import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/justeat.jpeg";
import { CartItems } from "./OrderNow";
import {useSelector} from "react-redux";

const Head = () =>{

    const cart = useSelector(data => {
        return data.cartData;
    });

    console.log(cart);

    const cartItems = cart.length;
    console.log(cartItems);

    // const cartItem = useContext(CartItems);
    // console.log("This is header cart item", cartItem);

    return(
        <React.Fragment>
        <div className="head">
            <Link to="/">
              <img src={Logo} alt="logo" className="head_image" style={{color:"#ED6206"}}/>
            </Link>
            <div className="head_nav">
                <Link to="/" className="head_link">
                    Home
                </Link>  
                <Link to="/aboutus" className="head_link">
                    About
                </Link> 
                 <Link to="/plans" className="head_link">
                    Recipe
                </Link>
                <Link to="/plans" className="head_link">
                    Cart 
                    {cartItems == 0 ? "" : <span> {cartItems} </span>}
                </Link>
                <Link to="/signup" className="head_link">
                    Signup
                </Link>
                <Link to="/login" className="head_link">
                    Login
                </Link>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Head;