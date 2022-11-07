import React from "react";
import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="20">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <NavLink href={linkName}>
          <a>{buttonText}</a>
        </NavLink>
      </Button>
    </Box>
  </Flex>
);
export default Banner;
