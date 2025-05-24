import React,{useState,useEffect} from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/girl.json'
import "../App.css";
import {name} from '../data/data'
import { TypeAnimation } from "react-type-animation";
import { Button,Text} from '@chakra-ui/react';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Home = () => {
  const handleClick = () => {
    window.open("https://drive.google.com/file/d/18On1UCC_6ePPUzAiv10nS9OUcofjFsGU/view?usp=drive_link", "_blank");
  };
  const [selIndex,setSelIndex]=useState(1);
  useEffect(() => {
    const interval=setTimeout(() => {
      setSelIndex((selIndex + 1) % name.length);
    }, [2000]);
    return () => clearInterval(interval);
  },[selIndex]);
  return (
    <div id="home" className="md:h-[91vh] flex flex-col md:flex-row mt-[9vh]">
      <div className="w-[100vw] md:w-[50vw] flex items-center justify-center flex-col h-[45.5vh] md:h-[91vh]">
        <h1 className="text-4xl text-white font-bold  flex items-center justify-center h-[22.75vh]">
          <span className="gradient-text text-4xl md:text-7xl px-4">I'm</span>
          <span className="flex items-end justify-center">
            {name.split("").map((letter, index) =>
              index === selIndex ? (
                <span
                  key={index}
                  className="text-white text-4xl md:text-7xl shake "
                >
                  {letter}
                </span>
              ) : (
                <span
                  key={index}
                  className="gradient-text text-4xl md:text-6xl"
                >
                  {letter}
                </span>
              )
            )}
          </span>
        </h1>
        <div className="flex items-center justify-start md:justify-center space-x-* flex-col h-[8.75vh] text-white font-bold">
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "Data Analyst", 1000]}
            speed={50}
            className="animated-text"
            repeat={Infinity}
          />
        </div>
        <div>
          <Button
            style={{
              fontSize: "14px",
              marginTop: "13%",
              color: "blue.400",
            }}
            className="shadow-2xl shadow-black"
            onClick={handleClick}
          >
          Resume
          </Button>
          <Button
            style={{
              marginLeft: "4px",
              fontSize: "14px",
              marginTop: "13%",
              color: "blue.400",
            }}
            className="shadow-2xl shadow-black"
          >
            <a href="mailto:mahithakomma2004@gmail.com">Hire Me</a>
          </Button>
        </div>
      </div>
      <div className="w-[100vw] md:w-[50vw] h-[45.5vh] md:h-[91vh] flex items-center justify-center">
        <Lottie width="70%" height="50%" options={defaultOptions} />
      </div>
    </div>
  );
}

export default Home
