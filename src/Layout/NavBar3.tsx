import React from "react";
import logo from "../assets/images/logo-white.png";

const NavBar3 = () => {
  return (
    <React.Fragment>
      <nav className="main-nav dark transparent stick-fixed">
        <div className="full-wrapper relative clearfix">
          <div className="nav-logo-wrap local-scroll">
            <a href="/" className="logo">
              <img src={logo} alt="Company logo" />
            </a>
          </div>
          <div className="mobile-nav" role="button" tabIndex={0}>
            <i className="fa fa-bars"></i>
            <span className="sr-only">Menu</span>
          </div>
          <div className="inner-nav desktop-nav">
            <ul className="clearlist scroll-nav local-scroll">
              <li className="active">
                <a href="#home">Ahoj</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
              <li>
                <a href="/intro">All Demos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar3;
