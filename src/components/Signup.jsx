import React, {useState, useEffect} from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Signup.css";
import {useHistory} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';

const Signup = () => {

  const history = useHistory();

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
    setUserDetails({...userDetails, [event.target.name]:event.target.value})
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    setUserDetails({username:"", phoneno:"", email:"", password:"", cpassword:""});

    if(username && phoneno && email && password && cpassword){
      const res = await fetch("https://formdata-e8d22-default-rtdb.firebaseio.com/fooduser.json", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          'Accept': 'application/json'
        },
        body : JSON.stringify({
          username, phoneno, email, password, cpassword
        })
      });
  
      console.log(res);
      alert("Succesfully filled the data");
    }else{
      alert("Fill details properly");
    }
  }

  // const handleSubmit = async (event) =>{
  //   event.preventDefault();
  //   const newEntry = {username, phoneno, email, password, cpassword};
  //   setAllEntry([...allEntry, newEntry]);
  //   console.log(allEntry);
  //   setUserDetails({username:"", phoneno:"", email:"", password:"", cpassword:""});

  //   const res = await fetch("/signup", {
  //     method : "POST",
  //     headers : {
  //       "Content-Type" : "application/json",
  //       'Accept': 'application/json'
  //     },
  //     body : JSON.stringify({
  //       username, phoneno, email, password, cpassword
  //     })
  //   });

  //   // console.log(res.status);

  //   // const data = await res.json();
  //   // console.log(data);

  //   // if(data.error){
  //   //   alert("Email already exists");
  //   // }else{
  //   //   alert("User regsitered");
  //   // }
  // }

  // .then((data) => {
  //   console.log(data);
  //   console.warn(data.json());
  //   if(data.status == 422 || !data){
  //   alert("Email already exists");
  //   console.log("Email already exists");
  //   }
  //   else{
  //   alert("User Registered Successfully");
  //   console.log("User Registered Successfully");
  //   history.push("/login");
  //   }
  //   // return data.json();
  // })

  // .then((userData) => {
  //   console.log(!userData);
  //   if(userData){
  //     alert("Email already exists");
  //     console.log("Not Registered");
  //   }
  //   else{
  //     alert("User Registered Successfully");
  //     console.log("User Registered Successfully");
  //     history.push("/login");
  //   }
  // });

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
            <TwitterIcon className="signup_icons" />
            <InstagramIcon className="signup_icons" />
          </div>
          <div className="registration">
            <p>Or use your email for registration</p>
          </div>
          <form method="POST">
          <div className="signup_input">
            <input placeholder="Name" name="username" onChange={handleChange} value={username} type="text"></input>
            <input placeholder="Phone no." name="phoneno" onChange={handleChange} value={phoneno} type="number"></input>
            <input placeholder="Email" name="email" onChange={handleChange} value={email} type="email"></input>
            <input placeholder="Password" name="password" id="password" onChange={handleChange} value={password} type="text"></input>
            <input placeholder="Confirm Password" name="cpassword" onChange={handleChange} value={cpassword} type="password"></input>
          </div>
          <button className="account_btn" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
