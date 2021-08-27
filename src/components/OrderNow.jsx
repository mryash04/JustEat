import React, {createContext} from 'react';
import "../styles/OrderNow.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import OrderNowItems from "./orderNowItems";
import OrderNowItemsData from "./OrderNowItemsData";

export const CartItems = createContext();

const OrderNow = () => {

    return (
        <div>
            <CartItems.Provider value={5}>
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
                <OrderNowItemsData />
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
            </CartItems.Provider>
        </div>

    )
};

export default OrderNow;
