import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <h1>Product Store</h1>
        <input />
        <nav className="nav">
          <Link to={"/"}> Home</Link>
          <Link to={"/create"}> Create</Link>
        </nav>
      </div>
    </>
  );
}
export default Header;
