import { Box,Text } from '@chakra-ui/react'
import { IconContext } from "react-icons";
import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../animations/location.json";
import animationData1 from "../animations/email.json";
import animationData2 from '../animations/phone.json';
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
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
  const handleClick1 = () => {
    window.open("https://github.com/Gohitha6Nadikota", "_blank");
  }
    const handleClick2 = () => {
    window.open("https://www.linkedin.com/in/gohitha-nadikota", "_blank");
  }
  return (
    <Box id="contact" className="bg-blue-950 text-white rounded-t-lg">
      <Box className="text-4xl text-white bg-blue-950 p-4 font-bold">
        Contact
      </Box>
      <Box className="flex justify-center items-center flex-wrap bg-blue-950">
        <Box className="w-[250px] flex justify-center items-center bg-blue-950 flex-col m-2">
          <Box width={{}} style={{ marginTop: { base: "20px", md: "0px" } }}>
            <Lottie width="70%" height="50%" options={defaultOptions1} />
          </Box>
          <Box className="text-white flex flex-col justify-center md:justify-start items-center h-[100px]">
            <Text>gohithapriyanadikota@gmail.com</Text>
          </Box>
        </Box>
        <Box className="w-[250px] flex justify-center items-center bg-blue-950 flex-col m-2">
          <Box width={{}} style={{ marginTop: { base: "20px", md: "30px" } }}>
            <Lottie width="70%" height="50%" options={defaultOptions} />
          </Box>
          <Box className="text-white flex flex-col justify-center items-center">
            <Text>D.No-12/121,Teachers Colony</Text>
            <Text>Sabbavaram,Anakapalle</Text>
            <Text>Andhra Pradesh</Text>
          </Box>
        </Box>
        <Box className="w-[250px] flex justify-center items-center bg-blue-950 flex-col m-2 ">
          <Box width={{}} style={{ marginTop: { base: "20px", md: "0px" } }}>
            <Lottie width="80%" height="80%" options={defaultOptions2} />
          </Box>
          <Box className="text-white flex flex-col justify-center items-center h-[120px]">
            <Text>+91 9581482482</Text>
            <Text>+91 9652686161</Text>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center items-center p-5">
        <Box className="hover:bg-white rounded-full hover:text-blue-950">
          <ImGithub className="text-5xl m-[12px]" onClick={handleClick1}/>
        </Box>
        <Box className="hover:bg-white rounded-full  hover:text-blue-950">
          <ImLinkedin className="text-5xl m-[12px]" onClick={handleClick2} />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact