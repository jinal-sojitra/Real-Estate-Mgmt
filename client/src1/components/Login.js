import React from "react";
import Loginposter from "../images/login.png";
import { NavLink } from "react-router-dom";
import Header from "./Header/Header";
// import "../StyleSheets/Login.css";

//import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <section className="registration">
        <div className="form-container">
          <div className="signup-image">
            <figure>
              <img src={Loginposter} alt="Login poster" />
            </figure>
          </div>

          <div className="registration-content">
            <div className="registration-form">
              <h2 className="form-title">Login</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email-id"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>
                <NavLink to="/Home" className="registration-next-link">
                  <div className="form-group form-button">
                    <button
                      type="submit"
                      name="next"
                      id="next"
                      className="next-page"
                      value="Next"
                    >
                      Log In
                    </button>
                    {/* <label htmlFor="next">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label> */}
                  </div>
                </NavLink>
              </form>
            </div>
            <a href="/Registration">New User? Register here</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
