import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Weapons from "./pages/Weapons/Weapons";
import Character from "./pages/Characters/Character";
import Loading from "./components/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const showLoadingPage = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 30000);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      showLoadingPage();
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/character" element={<Character />} />
          <Route path="/weapons" element={<Weapons />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
