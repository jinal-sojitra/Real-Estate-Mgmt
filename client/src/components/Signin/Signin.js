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
  FormLabel,
  Input,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import { signin, authenticate } from "APICall";
import { isAuthenticated } from "APICall";
import { Navigate } from "react-router-dom";
const Overlay = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="30%"
    backdropBlur="2px"
  />
);
const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<Overlay />);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    loading: false,
    error: "",
    success: false,
  });

  const { email, password, loading, error, success } = data;

  const handleChange = (name) => (e) => {
    setData({
      ...data,
      error: "",
      loading: false,
      success: false,
      [name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, error: false, loading: true });
    signin({ email, password })
      .then((response) => {
        if (response.error) {
          setData({ ...data, error: response.error, loading: false });
        } else {
          authenticate(response, () => {
            return <Navigate to="/" />;
          });
        }
      })
      .catch((err) => console.log(err));
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
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
        motionPreset="slideInBottom"
      >
        {overlay}
        <ModalContent>
          <ModalHeader>
            Signin Here!
            {error && <ErrorMessage />}
            {success && <SuccessMessage />}
            {loading && <Loading />}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={handleChange("email")} required />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={handleChange("password")}
                required
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
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
              Signin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{" "}
      <Button
        fontSize={"sm"}
        fontWeight={400}
        ml="4"
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
      >
        Sign In
      </Button>
    </>
  );
};

export default Signin;
