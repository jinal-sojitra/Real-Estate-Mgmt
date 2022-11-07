import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import "../../index.css";

export default function Card({ IMAGE }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={4}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <FaHeart
            color="black"
            style={{
              height: "45px",
              width: "45px",
              position: "absolute",
              top: 10,
              right: 10,
              background: "rgba(255,255,255,0.5)",
              padding: "10px",
              borderRadius: "4px",
              cursor: "pointer",
              transition: ".3s all ease-in",
            }}
            className="wishlist-icon"
            _hover={{
              background: "#fff",
            }}
          />
          <Box
            style={{
              height: "30px",
              position: "absolute",
              bottom: 0,
              left: 0,
              background: "green",
              padding: "10px",
              borderRadius: "4px",
              transition: ".3s all ease-in",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text color="white" fontWeight={"bold"}>
              For Rent
            </Text>
          </Box>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            {/* <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text> */}
          </Stack>
          <Button w={"100%"} color={"white"} bg={"green.500"}>
            Buy Now
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
