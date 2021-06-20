import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Checkout.css";
import Star from "../assets/star.jpg";
import DeleteIcon from '@material-ui/icons/Delete';
import { addToCart, deleteFromCart } from "../redux/cart/cartAction";

const CheckOut = () => {
  const cartProduct = useSelector((data) => {
    return data.cartData;
  });

  console.log(cartProduct);

  const dispatch = useDispatch();

  const deleteId = cartProduct.map((value) => value.id);
  console.log(deleteId);

  const deleteItems = deleteId.filter(deleteItem => deleteItem);
  console.log(deleteItems);

  const subTotal = cartProduct.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );
  console.log(subTotal);

  const deleteItem = () =>{
    console.warn(deleteItems);
    dispatch(deleteFromCart(deleteId))
  }

  return (
    <div className="checkout">
      <p>
        Pay faster for all your shopping needs
        <span>with Amazon Pay balance </span>Get Instant refund on cancellations
        | Zero payment failures
      </p>
      <h2>Food Cart</h2>
      {cartProduct.map((value) => {
        return (
          <div className="checkout-product">
            <div className="checkout-product-details">
              <img src={value.image} alt="product-image" />
              <div className="checkout-product-details-data">
                <h2>{value.foodName}</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  ut, error cupiditate ullam ratione asperiores consectetur
                  earum maxime quia quas animi ea debitis, vitae laboriosam
                  blanditiis atque.
                </p>
                <img
                  src={Star}
                  alt="vegburger"
                  style={{
                    height: "50px",
                    width: "200px",
                    borderRadius: "10px",
                    marginLeft: "70px",
                  }}
                />
              </div>
              <div className="price">
                <span>&#8377;{value.price}</span>
              </div>
            </div>
            <div className="delete-btn">
              <button onClick={deleteItem}>Delete &nbsp;<span><DeleteIcon style={{fontSize : "15px"}} /></span></button>
            </div>
            <hr />
          </div>
        );
      })}

      {cartProduct.length == 0 ? (
        ""
      ) : (
        <div className="subtotal-details">
          <div className="subtotal-btn">
            <button>Subtotal</button>
            <span>Extra Charges may apply!</span>
          </div>
          <div className="subtotal-price">
            <h2>{subTotal}&#8377;</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
