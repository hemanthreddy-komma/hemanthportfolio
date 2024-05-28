import React from 'react'
import { Card,Button,Text, CardBody, CardFooter ,Heading,Stack} from "@chakra-ui/react";
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
      className="bg-gradient-to-b from-blue-400 to-blue-500"
      color="white"
      width={{ md: "600px" }}
      height={{ md: "400px" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack>
        <CardBody>
          <Heading size="md" marginTop="0px" marginBottom="60px">{name}</Heading>
          {problemssolved !== 0 && (
            <Text className="text-lg">Problems Solved: {problemssolved}</Text>
          )}
          {highestrated !== 0 && (
            <Text className="text-lg">Highest Rated: {highestrated}</Text>
          )}
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            style={{ backgroundColor: "white" }}
            onClick={() => handleClick(profilelink)}
          >
            View Profile
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default BigProfile