import { Stat, StatLabel, StatNumber, Flex } from "@chakra-ui/react";
import React from "react";
import Base from "../Base/Base.js";

const list = [
  {
    label: "Users",
    number: 10,
  },
  {
    label: "Users",
    number: 10,
  },
  {
    label: "Users",
    number: 10,
  },
  {
    label: "Users",
    number: 10,
  },
  {
    label: "Users",
    number: 10,
  },
];

const HomePage = () => {
  return (
    <>
      <Base title="Admin Dashboard">
        {/* <Flex flexWrap="wrap" flex="1" justifyContent="space-around"> */}
        {/* {list.map((item) => {
          return (
            <Stat>
              <StatLabel>{item.label}</StatLabel>
              <StatNumber>{item.number}</StatNumber>
            </Stat>
          );
        })} */}
        <Stat>
          <StatLabel>dfasdfad</StatLabel>
          <StatNumber>20</StatNumber>
        </Stat>
        {/* </Flex> */}
      </Base>
    </>
  );
};

export default HomePage;
