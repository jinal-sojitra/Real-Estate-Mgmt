import React, { useState } from "react";
import Login from "../../images/login.png";
import Header from "../Header/Header";
import "./Signin.css";
import "bootstrap/dist/css/bootstrap.css";
// .. means parent directory
// . current directory

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (name) => (e) => {
    setUser({ ...user, [name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="signin-container container">
        <div className="row">
          <div className="left-view-signin">
            <img src={Login} alt="" />
          </div>
          <div className="right-view-signin">
            <form>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange("email")}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange("password")}
              />
              <br />
              <br />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
