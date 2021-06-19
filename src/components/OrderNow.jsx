import React from 'react';
import "../styles/OrderNow.css";
import Vegburger from "../assets/burger.webp";
import Vegmomos from "../assets/Veg Momos.jpg";
import pizza from "../assets/pizza.jpg";
import PavBhaji from "../assets/pavbhaji.jpg";
import dosaOne from "../assets/dosaOne.jpg";
import StarSharpIcon from '@material-ui/icons/StarSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const OrderNow = () => {
    return (
        <div>
            <div className="order-now-back">

            </div>
            <div className="order-now-button">
                <button className="order-now-all-button" type="submit">
                    Veg
                </button>
                <button className="order-now-all-button" type="submit">
                    Breakfast
                </button>
                <button className="order-now-all-button" type="submit">
                    Lunch
                </button>
                <button className="order-now-all-button" type="submit">
                    Dinner
                </button>
                <button className="order-now-all-button" type="submit">
                    Snacks
                </button>
            </div>
            <div className="bg-white">
                <div className="veg-burger">
                    <div className="veg-burger-img">
                        <img src={Vegburger} alt="vegburger" style={{ height: "170px",width:"250px",borderRadius:"10px" }} />
                    </div>
                    <div className="veg-burger-text">
                        <h3>Veg Burger</h3>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <h4>$40</h4>
                    </div>
                    <div className="veg-burger-cart">
                    <button className="veg-burger-cart-button" type="submit">
                    ADD
                    < ShoppingCartIcon className="Add-icon"/>
                    </button>
                    </div>
                </div>
                <div className="veg-burger">
                    <div className="veg-burger-img">
                        <img src={dosaOne} alt="vegburger" style={{ height: "170px",width:"250px",borderRadius:"10px" }} />
                    </div>
                    <div className="veg-burger-text">
                        <h3>Masala Dosa</h3>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <h4>$40</h4>
                    </div>
                    <div className="veg-burger-cart">
                    <button className="veg-burger-cart-button" type="submit">
                    ADD
                    < ShoppingCartIcon className="Add-icon"/>
                    </button>
                    </div>
                </div>
                <div className="veg-burger">
                    <div className="veg-burger-img">
                        <img src={Vegmomos} alt="vegburger" style={{ height: "170px",width:"250px",borderRadius:"10px" }} />
                    </div>
                    <div className="veg-burger-text">
                        <h3>Veg Momo</h3>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <h4>$40</h4>
                    </div>
                    <div className="veg-burger-cart">
                    <button className="veg-burger-cart-button" type="submit">
                    ADD
                    < ShoppingCartIcon className="Add-icon"/>
                    </button>
                    </div>
                </div>
                <div className="veg-burger">
                    <div className="veg-burger-img">
                        <img src={ pizza} alt="vegburger" style={{ height: "170px",width:"250px",borderRadius:"10px" }} />
                    </div>
                    <div className="veg-burger-text">
                        <h3>Pizza</h3>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <h4>$40</h4>
                    </div>
                    <div className="veg-burger-cart">
                    <button className="veg-burger-cart-button" type="submit">
                    ADD
                    < ShoppingCartIcon className="Add-icon"/>
                    </button>
                    </div>
                </div>
                <div className="veg-burger">
                    <div className="veg-burger-img">
                        <img src={PavBhaji} alt="vegburger" style={{ height: "170px",width:"250px",borderRadius:"10px" }} />
                    </div>
                    <div className="veg-burger-text">
                        <h3>Pav Bhaji</h3>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <StarSharpIcon/>
                        <h4>$40</h4>
                    </div>
                    <div className="veg-burger-cart">
                    <button className="veg-burger-cart-button" type="submit">
                    ADD
                    < ShoppingCartIcon className="Add-icon"/>
                    </button>
                    </div>
                </div>
                <button style={{
                    backgroundColor:"#000000",
                    borderRadius:"50px",
                    padding:"10px 20px",               
                    border: "none",
                    outline:"none",
                    color: "white",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    justifyContent:"center",
                    fontSize: "16px",
                    cursor:"pointer",
                    verticalAlign:"right",
                    marginLeft:"600px",
                    marginTop:"40px"
                }}>More<span style={{
                    verticalAlign:"middle"
                }}><ArrowDropDownIcon/></span></button>
            </div>
        </div>

    )
};

export default OrderNow;
