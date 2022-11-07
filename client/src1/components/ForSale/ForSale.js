import React, { useState } from "react";
import Header from "../Header/Header";

import Banner from "../Banner/Banner";
import { Flex } from "@chakra-ui/react";
import Property from "../Home/Property";
const ForSale = () => {
  const [propertiesForSale, setPropertiesForSale] = useState([
    {
      price: 20,
      rentFrequency: 10,
      rooms: 10,
      title: "Demo1",
      baths: 2,
      area: "200X200",
      agency: "XYZ",
      isVerified: false,
    },
    {
      price: 20,
      rentFrequency: 10,
      rooms: 10,
      title: "Demo1",
      baths: 2,
      area: "200X200",
      agency: "XYZ",
      isVerified: false,
    },
    {
      price: 20,
      rentFrequency: 10,
      rooms: 10,
      title: "Demo1",
      baths: 2,
      area: "200X200",
      agency: "XYZ",
      isVerified: false,
    },
    {
      price: 20,
      rentFrequency: 10,
      rooms: 10,
      title: "Demo1",
      baths: 2,
      area: "200X200",
      agency: "XYZ",
      isVerified: false,
    },
  ]);
  return (
    <>
      <Header />
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />{" "}
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </>
  );
};

export default ForSale;
