import React,{useState,useEffect} from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/girl.json'
import "../App.css";
import {name} from '../data/data'
import { TypeAnimation } from "react-type-animation";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Home = () => {
  const [selIndex,setSelIndex]=useState(1);
  useEffect(() => {
    const interval=setTimeout(() => {
      setSelIndex((selIndex + 1) % name.length);
    }, [2000]);
    return () => clearInterval(interval);
  },[selIndex]);
  return (
    <div
      id="home"
      className="md:h-[91vh] bg-gradient-to-b from-blue-300 to-blue-200  flex flex-col md:flex-row"
    >
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
        <div className="flex items-center justify-center space-x-* flex-col h-[22.75vh] text-white font-bold">
          {/*<h2 className="">Passionate Programmer</h2>
          <h2 className="">and</h2>
          <h2 className="">Web Enthusiast</h2>*/}
          <TypeAnimation
            sequence={["Web Enthusiast", 1000, "Passionate Programmar", 1000]}
            speed={50}
            className="animated-text"
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="w-[100vw] md:w-[50vw] h-[45.5vh] md:h-[91vh] flex items-center justify-center">
        <Lottie width="70%" height="50%" options={defaultOptions} />
      </div>
    </div>
  );
}

export default Home