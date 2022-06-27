import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/favicon.png";

const Navbar = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="navbar bg-slate-800 rounded-xl mt-5 shadow-xl flex justify-between sticky top-5">
      {/* small Device */}
      <div className="dropdown lg:hidden">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 bg-slate-800 rounded-xl w-52 shadow-xl"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex="0">
            <span className="justify-between">
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </span>
            <ul className="p-2 bg-slate-800 shadow-xl rounded-xl">
              <li>
                <Link to="/">Phone</Link>
              </li>
              <li>
                <Link to="/">Phone Accessories</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">My Orders</Link>
          </li>
        </ul>
      </div>
      <Link
        to="/"
        className="btn btn-ghost normal-case text-xl text-center"
        href="#"
      >
        <img src={logo} width="20" className="mr-2" alt="" /> Demo Mart
      </Link>

      {/* large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex="0">
            <span>
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </span>
            <ul className="p-2 bg-slate-800 shadow-xl rounded-xl">
              <li>
                <Link to="/">Phone</Link>
              </li>
              <li>
                <Link to="/">Phone Accessories</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">My Orders</Link>
          </li>
        </ul>
      </div>

      {user ? (
        <div>
          {user} <button className="btn ml-4">LogOut</button>
        </div>
      ) : (
        <div>
          <button className="btn bg-slate-300 text-slate-800 hover:bg-slate-400 hover:text-slate-100">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
