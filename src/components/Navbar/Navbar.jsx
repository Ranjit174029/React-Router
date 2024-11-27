import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-600 text-white p-3 space-x-3">
      <Link to="/home">Home</Link>
      <Link to="/product">Products</Link>
      <Link to="/blog">Blogs</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default Navbar;
