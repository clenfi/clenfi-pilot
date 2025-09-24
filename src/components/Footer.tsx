import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="w-full bold italic py-2">
      <div className="section-container py-2">
        <div className="text-center">
          <p className="text-black text-m m-0">
            &copy; 2025 CLenFi. All rights reserved. Making credit simple and
            accessible for everyone in crypto.
          </p>
          <p className="text-black text-m italicW m-0">
            "Made with{" "}
            <span
              className="footer-heart"
              style={{ display: "inline-block", transition: "transform 0.3s" }}
            >
              &#10084;&#65039;
            </span>{" "}
            by THE HONOURED ONES"
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
