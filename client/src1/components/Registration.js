import React, { useState } from "react";
import regposter from "../images/signup.png";
import { NavLink } from "react-router-dom";
// import API from "../API";
import Header from "./Header/Header";

const Registration = () => {
  //const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    city: "",
    password: "",
    cpassword: "",
    formData: new FormData(),
  });
  let name, value;

  const { formData } = user;

  const handleInputs = (e) => {
    name = e.target.name;
    value = name === "photo" ? e.target.files[0] : e.target.value;

    setUser({ ...user, [name]: value });
    formData.append(name, value);
  };

  const PostData = (e) => {
    e.preventDefault();
    // const { name, email, contact, role, city, password, cpassword } = user;

    // alert(JSON.stringify(user));
    // fetch(`${API}/register`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.error) {
    //       alert(data.error);
    //       console.log("Invalid Registration");
    //     } else {
    //       window.alert("Registration Successfull");
    //       console.log("Registration Successfull");

    //       //history.pushState("/login");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <section className="registration">
        <div className="form-container">
          <div className="signup-image">
            <figure>
              <img src={regposter} alt="registration pic" />
            </figure>
          </div>
          <div className="registration-content">
            <div className="registration-form">
              <h2 className="form-title">Registration</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email-id"
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label> */}
                  <input
                    type="number"
                    autoComplete="off"
                    name="contact"
                    id="contact"
                    onChange={handleInputs}
                    value={user.contact}
                    placeholder="Your Contact Number"
                  />

                  {/* <input
                    type="number"
                    name="contact"
                    id="contact"
                    autoComplete="off"
                    value={user.contact}
                    placeholder="Contact"
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="role">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>

                  <select onChange={handleInputs} name="role" id="role">
                    <option value="selectrole" selected="true">
                      Select Role:
                    </option>
                    <option value="buyer/seller">Buyer/Seller</option>
                    <option value="admin">Admin</option>
                    <option value="service-provider">Service Provider</option>
                  </select>

                  {/* <select value={user.role} onChange={handleInputs}>
                    <option value="role" selected="true">
                      Role
                    </option>
                    <option value="buyer/seller">Buyer/Seller</option>
                    <option value="agent">Agent</option>
                    <option value="service-provider">Service Provider</option>
                  </select> */}
                </div>

                <div className="form-group">
                  <label htmlFor="city">
                    <i className="zmdi zmdi-pin material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="off"
                    value={user.city}
                    onChange={handleInputs}
                    placeholder="Your City"
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
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Create Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="photo">
                    {/* <i className="zmdi zmdi-lock material-icons-name"></i> */}
                  </label>
                  <input type="file" name="photo" id="photo" />
                </div>

                {/* <NavLink to="/Registration2" className="registration-next-link"> */}
                <div className="form-group form-button">
                  <button
                    type="submit"
                    name="next"
                    id="next"
                    className="next-page"
                    value="Next"
                    onClick={PostData}
                  >
                    Next
                  </button>
                  {/* <label htmlFor="next">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label> */}
                </div>
                {/* </NavLink> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
