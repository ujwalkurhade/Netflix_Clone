import React from "react";
import logo from "../assets/logo.png";
import SatartBtn from "./SatartBtn";

function Hero() {
  return (
    <div className="Hero">
      {/* Navbar */}
      <div className="nav">
        <img src={logo} className="logo"></img>
        <div className="rightnav">
          <div className="optionBtn">
            <label>✒️</label>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <button className="signIn">Sign In</button>
        </div>
      </div>
      {/* Hero Text */}
      <div className="heroText">
        <h2>Unlimited movies, TV shows and more</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to center or
          restart your membership.
        </p>
        <input placeholder="Email address"></input>
        <SatartBtn />
      </div>
    </div>
  );
}

export default Hero;
