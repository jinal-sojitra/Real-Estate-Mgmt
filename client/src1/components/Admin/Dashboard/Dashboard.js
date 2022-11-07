import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../SiderBar/SideBar";

const Dashboard = () => {
  return (
    <div>
      <SidebarWithHeader />
      <Box>
        <Text>Hello</Text>
      </Box>
    </div>
  );
};

export default Dashboard;
