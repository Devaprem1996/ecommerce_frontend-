import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_links">
        <Link className="nav_link" to="/">
          SHOP
        </Link>
        <Link className="nav_link" to="/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
