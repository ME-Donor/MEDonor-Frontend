import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="footer-content">
                <p><b>Redefining the feeling of being  helping hands for someone in Need.</b></p>
                <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
                <p className="copyright text-center" style={{fontWeight:'bold'}}>
              © {new Date().getFullYear()}{" "}
              <a href="#">ME-Donor</a>, made with
              love for a better web
            </p>

            </div>
        </div>
    </div>
  );
}

export default Footer; 