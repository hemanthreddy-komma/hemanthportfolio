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
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
const ProfileCard = () => {
  return (
    <Card maxW="xs" className="m-3">
      <CardBody
        width="100%"
        className="flex justify-center items-center flex-col"
      >
        <Image
          src="https://cdn.dribbble.com/users/70628/screenshots/1743345/codechef.png"
          alt="Green double couch with wooden legs"
          borderRadius="full"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">CodeChef</Heading>
          <Text>Problems Solved:</Text>
          <Text>Highest Rated:</Text>
          <Text>Problems Solved:</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button>View Profile</Button>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard