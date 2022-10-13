import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <>
      <nav className="mainNav">
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
};

export default Header;
