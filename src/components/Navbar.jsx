import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  // const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1><Link to='/'>Crypto Tracker</Link></h1>
      <h2><Link to='/history'>History of crytocurrencies</Link></h2>
      <h2><Link to='/cryptocurrencies'>Cryptocurrencies</Link></h2>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
