import React, {useState, useEffect} from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Signup.css";

const Signup = () => {

  const[userDetails, setUserDetails] = useState({
    username:"",
    phoneno:"",
    email:"",
    password:"",
    cpassword:""
  });

  const[allEntry, setAllEntry] = useState([]);
  console.log(allEntry);

  const{username, phoneno, email, password, cpassword} = userDetails;

  console.log(userDetails);

  const handleChange = (event) =>{
    console.log(event.target.name);
    setUserDetails({...userDetails, [event.target.name]:event.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const newEntry = {username, phoneno, email, password, cpassword};
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setUserDetails({username:"", phoneno:"", email:"", password:"", cpassword:""})
  }

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
            <input placeholder="Name" name="username" onChange={handleChange} value={username} type="text"></input>
            <input placeholder="Phone no." name="phoneno" onChange={handleChange} value={phoneno} type="number"></input>
            <input placeholder="Email" name="email" onChange={handleChange} value={email} type="email"></input>
            <input placeholder="Password" name="password" onChange={handleChange} value={password} type="password"></input>
            <input placeholder="Confirm Password" name="cpassword" onChange={handleChange} value={cpassword} type="password"></input>
          </div>
          <button className="account_btn" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
