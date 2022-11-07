import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          {/* <img
                src={Logo}  
                alt=""
                style={{
                width: "80px",
                height: "80px",
                }}
            /> */}
          <h6>Logo</h6>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Properties
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/for-sale">
                  For Sell
                </a>
                <a class="dropdown-item" href="/for-rent">
                  For Rent
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  PG
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signin">
                Signin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Splash-screen">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
