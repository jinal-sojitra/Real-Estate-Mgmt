import React, { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Featured from "../Featured/Featured";
import Recent from "../Recent/Recent";

import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Property from "./Property";

// import "../../StyleSheets/App.css";
// import "../../StyleSheets/Login.css";
// import "../../StyleSheets/Navbar.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Recent />
    </>
  );
};

export default Home;
