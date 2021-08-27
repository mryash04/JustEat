import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/justeat.jpeg";
import { CartItems } from "./OrderNow";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Head = () => {
  const cart = useSelector((data) => {
    return data.cartData;
  });

  console.log(cart);

  const cartItems = cart.length;
  console.log(cartItems);

  // const cartItem = useContext(CartItems);
  // console.log("This is header cart item", cartItem);

  const[navLinkColor, setNavLinkColor] = useState("#ffffff");
  console.log(navLinkColor);

  const changeColor = () =>{
    setNavLinkColor("#000000");
  }

  return (
    <React.Fragment>
      <div className="head">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="head_image"
            style={{ color: "#ED6206" }}
          />
        </Link>
        <div className="head_nav">
          <Link to="/" className="head_link" style={{color : navLinkColor}} onClick={changeColor}>
            Home
          </Link>
          <Link to="/aboutus" className="head_link" style={{color : navLinkColor}} onClick={changeColor}>
            About
          </Link>
          <Link to="/plans" className="head_link"  style={{color : navLinkColor}} onClick={changeColor}>
            Recipe
          </Link>
          <Link to="/plans" className="head_link"  style={{color : navLinkColor}} onClick={changeColor}>
            <AddShoppingCartIcon
              style={{ fontSize: "25px", marginTop: "5px" }}
            />
            {cartItems == 0 ? (
              ""
            ) : (
              <span
                style={{
                  top: "-17px",
                  right: "11px",
                  position: "relative",
                  fontSize: "20px",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                {cartItems}
              </span>
            )}
          </Link>
          <Link to="/signup" className="head_link"  style={{color : navLinkColor}} onClick={changeColor}>
            Signup
          </Link>
          <Link to="/login" className="head_link"  style={{color : navLinkColor}} onClick={changeColor}>
            Login
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Head;
