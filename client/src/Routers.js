import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Home from "./components/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "components/Home/Home";
import HomePage from "components/AdminDashboard/HomePage/HomePage";
import "./index.css";
import ListPropertyForm from "components/ListPropertyForm/ListPropertyForm";
// import AuthLayout from "layouts/Auth.js";
// import AdminLayout from "layouts/Admin.js";
// import RTLLayout from "layouts/RTL.js";

const Routers = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path={`/auth`} element={<AuthLayout />} />
          <Route path={`/admin`} element={<AdminLayout />} />
          <Route path={`/rtl`} element={<RTLLayout />} /> */}
          {/* <Redirect from={`/`} to="/admin/dashboard" /> */}
          {/* <Navigate from="/" to="/admin/dashboard" /> */}
          <Route path="/admin/dashboard" element={<HomePage />} />

          <Route path="/list-property" element={<ListPropertyForm />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default Routers;
