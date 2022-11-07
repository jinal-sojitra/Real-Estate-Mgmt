import { Container } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
const Base = ({ title, children }) => {
  return (
    <>
      <AdminSidebar>
        <Container
          borderRadius={"10px"}
          padding={"10px"}
          bg={"white"}
          maxW={"1000px"}
          h={"80px"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
          boxShadow={"3xl"}
        >
          {title}
        </Container>
        <br />
        <Container
          borderRadius={"10px"}
          padding={"20px"}
          bg={"white"}
          maxW={"1000px"}
          boxShadow={"6xl"}
          display={"flex"}
          flexDirection={"column"}
          fontFamily={""}
        >
          {children}
        </Container>
      </AdminSidebar>
    </>
  );
};

export default Base;
