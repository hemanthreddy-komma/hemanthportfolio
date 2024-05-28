import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
const ProfileCard = ({name,image,profilelink,problemssolved,highestrated}) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Card maxW="xs" className="m-4 md:m-5">
      <CardBody
        width="100%"
        className="flex justify-center items-center flex-col"
        backgroundColor="blue.200"
      >
        <Image
          src={image}
          alt={name}
          width="250px"
          height="250px"
          borderRadius="full"
          bg="white"
        />
        <Stack
          mt="7"
          spacing="1"
          height="100px"
          className="flex justify-center items-center flex-col"
        >
          <Heading size="md">{name}</Heading>
          {problemssolved && <Text>Problems Solved: {problemssolved}</Text>}
          {highestrated && <Text>Highest Rated: {highestrated}</Text>}
          <Text></Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button onClick={() => handleClick(profilelink)}>View Profile</Button>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard