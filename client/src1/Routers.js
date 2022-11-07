import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import ForRent from "./components/ForRent/ForRent";
import ForSale from "./components/ForSale/ForSale";
import Dashboard from "./components/Admin/Dashboard/Dashboard/index";

const Routers = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/for-rent" element={<ForRent />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default Routers;
