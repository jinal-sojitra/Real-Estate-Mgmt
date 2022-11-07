import React from "react";
import {
  Text,
  Button,
  useDisclosure,
  ModalBody,
  Modal,
  ModalCloseButton,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Input,
  FormLabel,
  Select,
  Flex,
  HStack,
  Textarea,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import { signup } from "APICall";
const Overlay = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="30%"
    backdropBlur="2px"
  />
);
const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<Overlay />);

  const [data, setData] = React.useState({
    name: "",
    email: "",
    role: "buyer/seller",
    contact: "",
    password: "",
    cpassword: "",
    city: "",
    address: "",
    error: "",
    success: "",
    loading: false,
    photo: "",
    formData: new FormData(),
  });

  const {
    name,
    email,
    role,
    contact,
    password,
    cpassword,
    city,
    address,
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

  const onSubmit = (e) => {
    e.preventDefault();
    formData.append("role", role);

    setData({ ...data, loading: true });

    signup(formData).then((response) => {
      if (response.error) {
        setData({ ...data, error: response.error, loading: false });
      } else {
        setData({
          name: "",
          email: "",
          role: "buyer",
          contact: "",
          password: "",
          cpassword: "",
          city: "",
          address: "",
          error: "",
          formData: new FormData(),
          success: true,
          loading: false,
        });
      }
    });
  };

  const ErrorMessage = () => {
    return (
      <>
        <br />
        <br />
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      </>
    );
  };

  const SuccessMessage = () => {
    return (
      <>
        <br />
        <br />
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Signed up Successfully!</AlertTitle>
        </Alert>
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <br />
        <br />
        <Alert status="info">Loading...</Alert>
      </>
    );
  };

  return (
    <>
      <Modal
        size={"xl"}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
        motionPreset="slideInBottom"
      >
        {overlay}
        <ModalContent>
          <ModalHeader>
            Register yourself here!
            {error && <ErrorMessage />}
            {success && <SuccessMessage />}
            {loading && <Loading />}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack gap={2}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={handleChange("email")}
                />
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
            <HStack gap={2}>
              <FormControl>
                <FormLabel>Fullname</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={handleChange("name")}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Select onChange={handleChange("role")}>
                  <option value="seller" selected={role === "buyer/seller"}>
                    Buyer/Seller
                  </option>
                  <option value="agent" selected={role === "agent"}>
                    Agent
                  </option>
                </Select>
              </FormControl>
            </HStack>
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
                <FormLabel>
                  Aadharcard Picture(JPG, PNG, JPEG, etc.. )
                </FormLabel>
                <Input type="file" onChange={handleChange("photo")} />
              </FormControl>
            </HStack>
            <br />
            <HStack gap={2}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={handleChange("password")}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={cpassword}
                  onChange={handleChange("cpassword")}
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
            {JSON.stringify(data)}
          </ModalBody>
          <ModalFooter w={"100%"}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={onSubmit}
            >
              Signup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{" "}
      {/* <Button fontSize={"sm"} fontWeight={400} ml="4">
        Sign In
      </Button> */}
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        _hover={{
          bg: "pink.300",
        }}
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
