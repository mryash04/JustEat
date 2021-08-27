import React, { useState } from "react";
import "../styles/OrderNow.css";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cart/cartAction";

const OrderNowItems = ({id, image, foodName, price}) => {
  const cart = useSelector((data) => {
    return data.cartData;
  });
  console.log(cart);

  const dispatch = useDispatch();
  console.log(dispatch);

  const [totalCartItem, setTotalCartItem] = useState(0);
  console.log(totalCartItem);

  const addItemIntoCart = () => {
    // console.log("Clicked");
    // setTotalCartItem(totalCartItem + 1);
    dispatch(addToCart({id : id, image : image, foodName : foodName, price : price}));
  };

  return (
    <div className="ordernowitems">
      <div className="veg-burger">
        <div className="veg-burger-img">
          <img
            src={image}
            alt="vegburger"
            style={{ height: "170px", width: "250px", borderRadius: "10px" }}
          />
        </div>
        <div className="veg-burger-text">
          <h3>{foodName}</h3>
          <StarSharpIcon />
          <StarSharpIcon />
          <StarSharpIcon />
          <StarSharpIcon />
          <StarSharpIcon />
          <h4>{price}</h4>
        </div>
        <div className="veg-burger-cart">
          <button className="veg-burger-cart-button" onClick={addItemIntoCart}>
            ADD
            <ShoppingCartIcon className="Add-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderNowItems;
