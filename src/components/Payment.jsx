import React, { useState } from "react";
import "../styles/Payment.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import sendEmail from "./Email";

toast.configure();

const Payment = () => {
  const history = useHistory();

  const goBackToHome = () => {
    history.push("/");
  };

  const notify = () => {
    return toast.success("Successful ordered", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  const failedPayment = () => {
    return toast.error("Payment failed", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  const [cardNumber, setCardNumber] = useState();

  console.log(cardNumber);

  const [verifyNumber, setVerifyNumber] = useState();

  const [spin, setSpin] = useState("spin");

  console.log(spin);

  const [userName, setUserName] = useState();

  console.log(userName);

  const getUserName = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  const cvNumber = (event) => {
    setCardNumber(event.target.value);
    console.log(event.target.value);
  };

  const paymentMoney = (event) => {
    event.preventDefault();
    if (cardNumber == 522) {
      // alert("Successfully Ordered");
      notify();
      emailjs.sendForm('gmail', 'template_yp1rjbg', event.target, 'user_DTb2pScBsF0GUcAccIBPL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } else {
      // alert("Failed");
      failedPayment();
    }
  };

  const generateNumber = (event) => {
    event.preventDefault();
    setSpin("new-spin");
    setTimeout(() => {
      setSpin("spin");
    }, 3000);
    let verificationNumber;
    setTimeout(() => {
      verificationNumber = Math.floor(Math.random() * 10000 + 1);
      console.log(verificationNumber);
      setVerifyNumber(verificationNumber);
    }, 3000);
  };

  return (
    <div className="payment">
      <div class="wrapper">
        <div class="container">
          <div class="title">Checkout Form</div>

          <form onSubmit={paymentMoney}>
          <div class="input-form">
            <div class="section-1">
              <div class="items">
                <label class="label">Name</label>
                <input
                  type="text"
                  onChange={getUserName}
                  class="input"
                  data-mask="0000 0000 0000 0000"
                  placeholder="Name"
                  value={userName}
                  name="name"
                />
              </div>
              <div class="items">
                <label class="label">Address</label>
                <input
                  type="text"
                  class="input"
                  data-mask="0000 0000 0000 0000"
                  placeholder="Address"
                />
              </div>
              <div class="items">
                <label class="label">Pin Code:</label>
                <input
                  type="text"
                  class="input"
                  maxlength="16"
                  data-mask="0000 0000 0000 0000"
                  placeholder="Pin Code"
                />
                <div class="items"></div>
                <label class="label">Phone no.</label>
                <input
                  type="text"
                  class="input"
                  maxlength="16"
                  data-mask="0000 0000 0000 0000"
                  placeholder="Phone no."
                />
              </div>
              <div class="items">
                <label class="label">card number</label>
                <input
                  type="text"
                  class="input"
                  maxlength="16"
                  data-mask="0000 0000 0000 0000"
                  placeholder="1234 1234 1234 1234"
                />
              </div>
            </div>
            <div class="section-2">
              <div class="items">
                <label class="label">card holder Name</label>
                <input type="text" class="input" placeholder="Coding Market" />
              </div>
            </div>
            <div class="section-3">
              <div class="items">
                <label class="label">Expire date</label>
                <input
                  type="text"
                  class="input"
                  data-mask="00 / 00"
                  placeholder="MM / YY"
                />
              </div>
              <div class="items">
                <div class="cvc">
                  <label class="label">cvc code</label>
                  <div class="tooltip">
                    ?
                    <div class="cvc-img">
                      <img src="https://i.imgur.com/r8oXtry.png" alt="" />
                    </div>
                  </div>
                </div>
                <input
                  onChange={cvNumber}
                  type="text"
                  class="input"
                  data-mask="0000"
                  placeholder="0000"
                />
              </div>
            </div>
            <div>
              <input
                style={{ padding: "10px" }}
                type="text"
                class="input"
                id="verifyNumber"
                data-mask="0000 0000 0000 0000"
                value={verifyNumber}
                placeholder="verification number"
              />
              <button
                onClick={generateNumber}
                style={{
                  marginLeft: "20px",
                  padding: "10px 43px",
                  cursor: "pointer",
                }}
              >
                Generate Number
              </button>
            </div>
            <div className={spin}></div>

          {/* <div class="btn">
            proceed
          </div> */}
            <input className="btn" type="submit" />
          </div>
          </form>
        </div>
      </div>

      <div></div>
      <div style={{ textAlign: "center" }}>
        <button style={{ padding: "10px 20px" }} onClick={goBackToHome}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Payment;
