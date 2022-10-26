import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to='/'>
          <h1>React Books</h1>
        </Link>
      </div>
      <div>
        <Link to='/favorites'>
          <h3>your Favorites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
