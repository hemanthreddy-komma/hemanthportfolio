import React from 'react'
import { Card, Image,Button,Text, CardBody, CardFooter ,Heading,Stack} from "@chakra-ui/react";
const BigProfile = ({
  name,
  image,
  profilelink,
  problemssolved,
  highestrated,
}) => {
    const handleClick = (url) => {
      window.open(url, "_blank");
    };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      backgroundColor="black"
      color="white"
      width="100%"
      height="100%"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt={name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
          {problemssolved!==0 && <Text>Problems Solved: {problemssolved}</Text>}
          {highestrated!==0 && <Text>Highest Rated: {highestrated}</Text>}
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue" onClick={()=>handleClick(profilelink)}>
            View Profile
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default BigProfile