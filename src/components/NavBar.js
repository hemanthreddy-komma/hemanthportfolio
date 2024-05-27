import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSquareLetterGFilled } from "react-icons/tb";
const NavBar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const handleMenu=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="w-[100%] h-[9vh] bg-blue-200 text-white flex items-center justify-between flex-row ">
      <div className="md:order-2">
        <div className="ml-auto md:hidden" onClick={handleMenu}>
          <IconContext.Provider value={{ color: "black" }}>
            <GiHamburgerMenu className="text-2xl ml-4" />
          </IconContext.Provider>
        </div>
        {isOpen && (
          <div className="flex flex-col bg-blue-200 text-black md:hidden absolute z-[2] top-[8vh] left-0 w-[65vw] shadow-xl rounded-lg">
            <ol className="flex justify-center flex-col items-center text-l font-extrabold">
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                Home
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                Skills
              </li>
              <li className="my-[3] w-[100%] h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Projects
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                Profiles
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                Achievements
              </li>
              <li className="my-3 mb-4 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                Contact
              </li>
            </ol>
          </div>
        )}
        <div className="">
          <ol className="hidden md:flex font-bold text-sm lg:text-lg text-black mt-2">
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              Home
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              Skills
            </li>
            <li className="md:mr-[10px] lg:mr-[50px]  py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              Projects
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              Profiles
            </li>
            <li className="md:mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              Achievements
            </li>
            <li className="mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              Contact
            </li>
          </ol>
        </div>
      </div>
      <div className="md:order-1 mr-[20px] h-[9vh] flex items-center justify-start md:ml-[20px]">
        <IconContext.Provider value={{ color: "black" }}>
          <TbSquareLetterGFilled className="text-5xl " />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default NavBar
/*


import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSquareLetterGFilled } from "react-icons/tb";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[9vh] bg-blue-200 text-white flex items-center justify-between md:justify-start">
      <div className="flex items-center md:order-2">
        <div className="ml-auto md:hidden" onClick={handleMenu}>
          <IconContext.Provider value={{ color: "black" }}>
            <GiHamburgerMenu className="text-2xl mr-4" />
          </IconContext.Provider>
        </div>
        {isOpen && (
          <div className="flex flex-col bg-blue-200 text-black md:hidden absolute z-10 top-[9vh] left-0 w-[65vw] shadow-xl rounded-lg">
            <ol className="flex justify-center flex-col items-center text-l font-extrabold">
              <li className="my-3 w-full h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Home
              </li>
              <li className="my-3 w-full h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Skills
              </li>
              <li className="my-3 w-full h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Projects
              </li>
              <li className="my-3 w-full h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Profiles
              </li>
              <li className="my-3 w-full h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Achievements
              </li>
              <li className="my-3 mb-4 w-full h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                Contact
              </li>
            </ol>
          </div>
        )}
        <div className="hidden md:flex font-bold text-sm lg:text-lg text-black mt-2">
          <ol className="flex space-x-4 lg:space-x-10">
            <li className="py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] cursor-pointer">
              Home
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] cursor-pointer">
              Skills
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] cursor-pointer">
              Projects
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] cursor-pointer">
              Profiles
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] cursor-pointer">
              Achievements
            </li>
            <li className="py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] cursor-pointer">
              Contact
            </li>
          </ol>
        </div>
      </div>
      <div className="ml-4 md:order-1">
        <IconContext.Provider value={{ color: "black" }}>
          <TbSquareLetterGFilled className="text-5xl" />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default NavBar;*/
