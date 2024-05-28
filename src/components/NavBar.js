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
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                <a href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </a>
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                <a href="#profiles" onClick={() => setIsOpen(false)}>
                  Profiles
                </a>
              </li>
              {/*<li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                <a href="#achievements" onClick={() => setIsOpen(false)}>
                  Achievements
                </a>
        </li>*/}
              <li className="my-3 mb-4 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ol>
          </div>
        )}
        <div className="">
          <ol className="hidden md:flex font-bold text-sm lg:text-lg text-black mt-2">
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#profiles">Profiles</a>
            </li>
            {/*<li className="md:mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#achievements">Achievements</a>
      </li>*/}
            <li className="mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#contact">Contact</a>
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
};

export default NavBar;
