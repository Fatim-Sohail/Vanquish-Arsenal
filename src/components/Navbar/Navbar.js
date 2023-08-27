import React, { useState } from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Initially set to false
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header>
        <div className="container paddingSmall">
          <nav className={showNavbar ? "show" : "hide"}>
          <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
            <div className="header-wrapper">
              <Header />
            </div>
              <li>
                <Link to="/home" className="lii">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/character" className="lii">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="/weapons" smooth={true} duration={500} className="lii">
                  Weapons
                </Link>
              </li>
              <li>
                <Link to="/trophies" className="lii">
                  Trophies
                </Link>
              </li>
              <li>
                <Link to="/cheats" className="lii">
                  Cheat Codes
                </Link>
              </li>
            </ul>
            <button className="barIcon" onClick={toggleNavbar}>
            {showNavbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Navbar;