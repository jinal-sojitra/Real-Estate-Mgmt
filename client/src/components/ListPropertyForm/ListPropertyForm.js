import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const ListPropertyForm = () => {
  const [data, setData] = React.useState({
    name: "",
    city: "",
    state: "",
    country: "",
    address: "",
    type: "sell",
    role: "owner",
    no_of_rooms: "",
    no_of_bathrooms: "",
    error: "",
    success: "",
    loading: false,
    photos: [],
    formData: new FormData(),
  });

  const {
    name,
    contact,
    city,
    state,
    country,
    address,
    no_of_bathrooms,
    no_of_rooms,
    role,
    type,
    formData,
    error,
    success,
    loading,
  } = data;

  const handleChange = (name) => (e) => {
    let value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.append(name, value);
    setData({
      ...data,
      [name]: value,
      error: "",
      loading: false,
      success: false,
    });
  };
  return (
    <div>
      <Navbar />
      <Box
        borderRadius={"10px"}
        boxShadow={"2xl"}
        margin={"30px auto"}
        w={"80%"}
        padding={"20px"}
      >
        <HStack gap={2}>
          <FormControl>
            <FormLabel>Property Name</FormLabel>
            <Input type="text" value={name} onChange={handleChange("name")} />
          </FormControl>

          <FormControl>
            <FormLabel>Contact no.</FormLabel>
            <Input
              type="number"
              value={contact}
              onChange={handleChange("contact")}
            />
          </FormControl>
        </HStack>

        <br />

        <HStack>
          <FormControl>
            <FormLabel>Price(in )</FormLabel>
            <Input type="number" onChange={handleChange("price")} />
          </FormControl>
          <FormControl>
            <FormLabel>Photos of Property</FormLabel>
            <Input type="file" onChange={handleChange("photos")} multiple />
          </FormControl>
        </HStack>
        <br />
        <HStack>
          <FormControl>
            <FormLabel>No of Rooms</FormLabel>
            <Input
              type="number"
              onChange={handleChange("no_of_rooms")}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>No of Bathrooms</FormLabel>
            <Input
              type="number"
              onChange={handleChange("no_of_bathrooms")}
              required
            />
          </FormControl>
        </HStack>
        <br />
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Textarea
            value={address}
            onChange={handleChange("address")}
          ></Textarea>
        </FormControl>
        <br />
        <HStack gap={2}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={handleChange("city")}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              value={state}
              onChange={handleChange("state")}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              value={country}
              onChange={handleChange("country")}
              required
            />
          </FormControl>
        </HStack>

        <br />

        <HStack>
          <FormControl>
            <FormLabel>You are:</FormLabel>
            <RadioGroup onChange={handleChange("role")} value={role}>
              <Stack direction="row">
                <Radio value="owner">Owner</Radio>
                <Radio value="agent">Agent</Radio>
                <Radio value="builder">Builder</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>You are here to:</FormLabel>
            <RadioGroup onChange={handleChange("type")} value={type}>
              <Stack direction="row">
                <Radio value="sell">Sell</Radio>
                <Radio value="rent">Rent/lease</Radio>
                <Radio value="pg">List as PG</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </HStack>
        <br />

        <br />
        {JSON.stringify(data)}
      </Box>
    </div>
  );
};

export default ListPropertyForm;
