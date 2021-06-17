import React, { useContext, useRef, useEffect, useState } from "react";
import { UserContext } from "../App";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar text-center navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          className="logo-img"
          src={`${process.env.PUBLIC_URL}/wp.png`}
          alt=""
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="form-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
          />
          <div className="search" type="submit">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chat">
              <i className="far fa-comment"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createpost">
              <i class="fas fa-plus"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="fas fa-user-circle"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
