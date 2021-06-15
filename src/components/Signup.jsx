import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Signup.css";
<<<<<<< HEAD
import { GoogleLogin } from "react-google-login";

const Signup = () => {

  const clientId = "191571004990-kt4tklk7lob36fba0vhd721p49djfs5l.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    console.log(response);
  }

=======

const Signup = () => {
>>>>>>> e7d0e27e6aa6d1a5f10a50fda6c070a4eb9e6b07
  return (
    <div className="signup_backimg">
      <div className="signup_main">
        <div className="welcome">
          <div className="abc">
            <div className="welcome_back">
              <h1>Welcome back !</h1>
            </div>
            <div className="info">
              <p>
                to keep connected with us please login with your personal info
              </p>
            </div>
            <button className="welcome_btn" type="submit">
              Sign in
            </button>
          </div>
        </div>

        <div className="account">
          <div className="create_account">
            <h2>Create Account</h2>
          </div>
          <div className="signup_icon">
            <FacebookIcon className="signup_icons" />
            <InstagramIcon className="signup_icons" />
            <TwitterIcon className="signup_icons" />
          </div>
          <div className="registration">
            <p>Or use your email for registration</p>
          </div>
          <div className="signup_input">
            <input placeholder="Name" type="text"></input>
<<<<<<< HEAD
            <input placeholder="Email" type="email"></input>
            <input placeholder="Password" type="password"></input>
          </div>
          <div className="signup-button">
          <button className="account_btn" type="submit">
            Sign Up
          </button>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          </div>
=======
            <input placeholder="Phone no." type="number"></input>
            <input placeholder="Email" type="email"></input>
            <input placeholder="Password" type="password"></input>
            <input placeholder="Confirm Password" type="password"></input>
          </div>
          <button className="account_btn" type="submit">
            Sign Up
          </button>
>>>>>>> e7d0e27e6aa6d1a5f10a50fda6c070a4eb9e6b07
        </div>
      </div>
    </div>
  );
};

export default Signup;
