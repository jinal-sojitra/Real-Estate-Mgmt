import React, { useState } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { Flex } from "@chakra-ui/react";
import Property from "../Home/Property";
const ForRent = () => {
  const [propertiesForRent, setPropertiesForRent] = useState([
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
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </>
  );
};

export default ForRent;
