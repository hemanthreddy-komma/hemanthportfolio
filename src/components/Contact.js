import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../animations/location.json";
import animationData1 from "../animations/email.json";
import animationData2 from '../animations/phone.json';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData1,
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
};
const Contact = () => {
  return (
    <Box>
      <Box className="text-4xl text-white bg-black p-4 gradient-text font-bold">
        Contact
      </Box>
      <Box className="flex justify-center items-center flex-wrap bg-black">
        <Box className="w-[250px] flex justify-center items-center bg-black flex-col m-2">
          <Box
            width={{ }}
            style={{ marginTop: { base: "20px", md: "0px" } }}
          >
            <Lottie width="70%" height="50%"  options={defaultOptions1} />
          </Box>
          <Box className="text-white flex flex-col justify-center md:justify-start items-center h-[100px]">
            <Text>gohithapriyanadikota@gmail.com</Text>
          </Box>
        </Box>
        <Box className="w-[250px] flex justify-center items-center bg-black flex-col m-2">
          <Box
            width={{}}
            style={{ marginTop: { base: "20px", md: "30px" } }}
          >
            <Lottie width="70%" height="50%" options={defaultOptions} />
          </Box>
          <Box className="text-white flex flex-col justify-center items-center">
            <Text>D.No-12/121,Teachers Colony</Text>
            <Text>Sabbavaram,Anakapalle</Text>
            <Text>Andhra Pradesh</Text>
          </Box>
        </Box>
        <Box className="w-[250px] flex justify-center items-center bg-black flex-col m-2">
          <Box
            width={{}}
            style={{ marginTop: { base: "20px", md: "0px" } }}
          >
            <Lottie width="80%" height="80%" options={defaultOptions2} />
          </Box>
          <Box className="text-white flex flex-col justify-center items-center h-[120px]">
            <Text>+91 9581482482</Text>
            <Text>+91 9652686161</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact