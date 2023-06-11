import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>Questions? Call 000-800-919-1694</p>
      <div className="links">
        <div className="link1">
          <a href="">FAQ</a>
          <a href="">Media Centre</a>
          <a href="">Ways to Watch</a>
          <a href="">Cookie Preferences</a>
          <a href="">Speed Test</a>
        </div>
        <div className="link2">
          <a href="">Help Centre</a>
          <a href="">Investor Relations</a>
          <a href="">Terms of Use</a>
          <a href="">Corporate Information</a>
          <a href="">Legal Notices</a>
        </div>
        <div className="link3">
          <a href="">Account</a>
          <a href="">Jobs</a>
          <a href="">Privacy</a>
          <a href="">Contact Us</a>
          <a href="">Only on Netflix</a>
        </div>
      </div>
      <div className="optionBtn1">
        <label>✒️</label>
        <select>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className="copytright">
        <h5>Netflix India</h5>
      </div>
    </div>
  );
}

export default Footer;
