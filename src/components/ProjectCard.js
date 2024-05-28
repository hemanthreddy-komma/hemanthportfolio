import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const ProjectCard = ({ image, name, description, url1, url2 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClick = (url, e) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <Box
      className="flip-card shadow-2xl shadow-black"
      maxW="xs"
      mx={{ base: "5px", md: "40px" }}
      my={{ base: "5px", md: "40px" }}
      onClick={handleFlip}
      width="250px"
      height="420px"
      borderColor="white"
    >
      <Box
        className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}
        width="250px"
        height="410px"
      >
        <Box className="flip-card-front" width="250px" height="420px">
          <Card bg="#2C4E80" color="white" width="250px" height="420px">
            <CardBody className="flex items-center justify-center flex-col">
              <Image
                src={image}
                alt={name}
                borderRadius="lg"
                width="200px"
                height="200px"
              />
              <Stack mt="6" spacing="0" h="74px">
                <Heading size="md" align="center">
                  {name}
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <ButtonGroup
                spacing="2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "8px",
                  paddingBottom: "29px",
                }}
              >
                <Button
                  w="50%"
                  bg="white"
                  color="black"
                  border="1px"
                  borderColor="black"
                  fontWeight="bold"
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  onClick={(e) => handleClick(url1, e)}
                >
                  Github
                </Button>
                {url2 && (
                  <Button
                    w="50%"
                    bg="white"
                    color="black"
                    border="1px"
                    borderColor="black"
                    fontWeight="bold"
                    _hover={{
                      bg: "black",
                      color: "white",
                    }}
                    onClick={(e) => handleClick(url2, e)}
                  >
                    Live
                  </Button>
                )}
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Box className="flip-card-back w-[100%]">
          <Card bg="#2C4E80" color="white" width="100%">
            <CardBody className="flex items-center justify-center flex-col w-[100%]">
              <Stack mt="2" spacing="3" width="100%">
                <Heading size="md" align="center" width="100%">
                  {name}
                </Heading>
                <Text width="100%" height="200px">
                  {description}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <ButtonGroup
                spacing="2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  w="50%"
                  bg="white"
                  color="black"
                  border="1px"
                  borderColor="black"
                  fontWeight="bold"
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  onClick={(e) => handleClick(url1, e)}
                >
                  Github
                </Button>
                {url2 && (
                  <Button
                    w="50%"
                    bg="white"
                    color="black"
                    border="1px"
                    borderColor="black"
                    fontWeight="bold"
                    _hover={{
                      bg: "black",
                      color: "white",
                    }}
                    onClick={(e) => handleClick(url2, e)}
                  >
                    Live
                  </Button>
                )}
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
