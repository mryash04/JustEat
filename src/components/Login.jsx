import React, {useState} from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Login.css";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const history = useHistory();
  console.log(history);

  const[input, setInput] = useState({
      username:"",
      password:""
  });

  console.log(input);

  const handleChange = (event) =>{
      setInput(event.target.value);
  };

  const handleSubmit = (event) =>{
      event.preventDefault();
      alert("Form Submitted");
  }

  return (
    <div className="imgback">
      <div className="signin_main">
        <div className="signin">
          <h2> Sign in </h2>
          <div className="signin_icon">
            <FacebookIcon className="signin_icons" />
            <InstagramIcon className="signin_icons" />
            <TwitterIcon className="signin_icons" />
          </div>
          <br />
          <form>
            <div className="signin_input">
              <input placeholder="username" id="signin" onChange={handleChange} type="text" value={input.username} name="username"></input>
              <input placeholder="password" id="signin" onChange={handleChange} type="password" value={input.password}></input>
            </div>
          </form>
          <p>forgot Password?</p>
          <button
            type="submit"
            className="signin_btn"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>

        <div className="hello">
          <h2>Hello Friend!</h2>
          <p>Enter Your detailes and start journey with us</p>
          <button type="submit" className="signup_btn">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
