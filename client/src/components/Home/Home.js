import React from "react";
import IMAGE1 from "../../assets/img/BackgroundCard1.png";
import IMAGE2 from "../../assets/img/ProfileBackground.png";
import IMAGE3 from "../../assets/img/BgSignUp.png";
import IMAGE4 from "assets/img/ImageArchitect1.png";
import IMAGE5 from "assets/img/ImageArchitect2.png";
import IMAGE6 from "assets/img/ImageArchitect3.png";
import Card from "components/Card/Card";
import { Flex, HStack } from "@chakra-ui/react";
import Navbar from "components/Navbar/Navbar";
import Hero from "components/Hero/Hero";
import Carousel from "components/Hero/Carousel";
// const IMAGE =
//   "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const arr = [
  {
    title: "abcc",
    image: IMAGE4,
    price: 20,
  },
  {
    title: "abcc",
    image: IMAGE5,
    price: 20,
  },
  {
    title: "abcc",
    image: IMAGE6,
    price: 20,
  },
  {
    title: "abcc",
    image: IMAGE4,
    price: 20,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Flex flexWrap="wrap" flex="1" justifyContent="space-around">
        {arr.map((item, index) => {
          return <Card key={index} IMAGE={item.image} />;
        })}
      </Flex>
    </>
  );
};

export default Home;
