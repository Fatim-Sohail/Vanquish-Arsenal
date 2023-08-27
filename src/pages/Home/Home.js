import React from "react";

import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="overlay"></div>
      <div className="content">
        <div className="slogan">
          <p className="slogan1">Where Destiny Awaits Your Command</p>
          <p className="slogan2">Dive into the Epic Odyssey of Vanquish</p>
        </div>
        <div className="about">
          <h2 className="about-title">About Vanquish</h2>
          <p className="about-desc">
            Step into a world where chaos is an art and destruction is the
            masterpiece. Vanquish isn't just a game; it's a twisted symphony of
            power, strategy, and unrelenting aggression. Unleash a storm of
            bullets and devastation as you navigate through a dystopian
            landscape that mirrors the very edges of sanity. Upgrade your arsenal, rewrite
            the rules, and obliterate everything in your path. In Vanquish,
            you're not the player; you're the conductor of chaos."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
