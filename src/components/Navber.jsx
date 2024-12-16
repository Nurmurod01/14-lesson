import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="flex gap-4 p-4 justify-center">
        <li className="border border-red-500 rounded-lg px-4 py-2">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="border border-red-500 rounded-lg px-4 py-2">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="border border-red-500 rounded-lg px-4 py-2">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="border border-red-500 rounded-lg px-4 py-2">
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </>
  );
}
