import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="cover img">
        <div className="overlay"></div>
      </div>
      <Link to="/home" className="explore-button">
        Explore
      </Link>
    </div>
  );
};

export default Landing;
