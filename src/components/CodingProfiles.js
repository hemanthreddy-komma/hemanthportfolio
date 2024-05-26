import React from "react";

import "@coreui/coreui/dist/css/coreui.min.css";
import { Box } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";

const CarouselWithCards = () => {
  return (
    <Box className="w-[100%] h-auto bg-black flex flex-wrap items-center justify-center">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </Box>
  );
};

export default CarouselWithCards;
