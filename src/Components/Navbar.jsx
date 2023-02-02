import React from "react";
import { Link } from "react-router-dom";
import "../spinner.css";

function Navbar() {
  return (
    <>
      <div className="nav-menu-box">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/categories"}>
          Show Categories
        </Link>
      </div>
    </>
  );
}

export default Navbar;
