import React, { useEffect, useState } from "react";
import "../App.css";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
  Box,
} from "@chakra-ui/react";
import useObserver from "./useObserver";

const Badge = ({ name, percent }) => {
  const [ref, isVisible] = useObserver();
  const [displayedPercent, setDisplayedPercent] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let currentPercent = 0;
      const interval = setInterval(() => {
        currentPercent += 1; // Increase by desired increment, e.g., 1
        setDisplayedPercent(Math.min(currentPercent, percent));
        if (currentPercent >= percent) {
          clearInterval(interval);
        }
      }, 20); // Adjust interval as needed for smoother animation
      return () => clearInterval(interval);
    }
  }, [isVisible, percent]);

  return (
    <div ref={ref} className="flex items-center justify-center overflow-hidden">
      <CircularProgress
        size={{ base: "130px", md: "200px" }}
        className="flex flex-col space-y-*"
        value={displayedPercent}
        thickness="5px"
      >
        <CircularProgressLabel
          height={{ base: "100px", md: "150px" }}
          width={{ base: "100px", md: "150px" }}
          className="relative"
        >
          <Box
            width="100%"
            height="100%"
            backgroundColor="white"
            borderRadius="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            overflow="hidden"
            position="relative"
          >
            <Text className="text-[15px] md:text-[20px] font-bold">{name}</Text>
            <Text className="text-[15px]">{displayedPercent}</Text>
          </Box>
        </CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default Badge;
