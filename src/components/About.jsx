import React from "react";
import "../styles/About.css";
// import AboutImage from "../assets/about.jpg";
import Enjoy from "../assets/enjoy.svg";
import Lean from "../assets/lean.svg";
import Order from "../assets/order.svg";
import AboutMap from "../assets/aboutmap.jpg";

const About = () => {
  return (
    <div className="about-back">
      <div className="about-img"></div>

      <div className="about-description">
        <p>
          For us, it's not just about bringing you good food from your favourite
          restaurants. It's about making a connection, which is why we sit down
          with the chefs, dreaming up menus that will arrive fresh and full of
          flavour. Try us!
        </p>
      </div>

      <div className="about-works">
        <h2>HOW IT WORKS</h2>
        <div className="works-img">
          <img
            src={Order}
            alt="order"
            style={{ height: "200px", width: "250px" }}
          />
          <img
            src={Lean}
            alt="lean"
            style={{ height: "200px", width: "250px" }}
          />
          <img
            src={Enjoy}
            alt="enjoy"
            style={{ height: "200px", width: "250px" }}
          />
        </div>
        <div className="works-img-data">
          <p>ORDER</p>
          <p>RELAX</p>
          <p>ENJOY</p>
        </div>
        <h4>Sit back and relax as the restaurent prepare your order.</h4>
      </div>

      <div className="about-mission">
        <h3>OUR MISSION</h3>
        <p>"Bringing good food into your everyday. That's our mission.</p>
        <p>
          That means we don't just deliver--we bring it, always going the extra
          mile to make your experience memorable.
        </p>
        <p>
          And it means this is delicious food you can enjoy everyday: from
          vibrant salads for healthy office lunches, to indulgent family-sized
          pizzas, to fresh sushi for a romantic night in. Whatever you crave, we
          can help."
        </p>
      </div>

      <div className="about-map">
        <h2 >&nbsp; &nbsp;WHERE WE ARE</h2>
        <img src={AboutMap} alt="about-map" style={{marginLeft:"25rem", width:"600px"}}/>
      </div>
      <div className="about-map-data">
        <div className="country">
        <h4>RESTAURENTS</h4>
        <span>200+</span>
        </div>
        <div className="bike">
        <h4>BIKES</h4>
        <span>1000+</span>
        </div>
        <div className="city"><h4>CITIES</h4><span>18+</span></div>
      </div>
    </div>
  );
};

export default About;
