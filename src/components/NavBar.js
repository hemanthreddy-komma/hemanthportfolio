import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSquareLetterGFilled } from "react-icons/tb";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
 useEffect(()=>{

 },[isOpen])
  return (
    <div className="w-[100%] h-[9vh] bg-blue-950 text-white flex items-center justify-between flex-row top-0 fixed z-10">
      <div className="md:order-2">
        <div className="ml-auto md:hidden" onClick={handleMenu}>
          <IconContext.Provider value={{ color: "white" }}>
            <GiHamburgerMenu className="text-2xl ml-4" />
          </IconContext.Provider>
        </div>
        {isOpen && (
          <div className="flex flex-col bg-blue-950 text-white md:hidden absolute z-[2] top-[8vh] left-0 w-[65vw] shadow-xl rounded-lg">
            <ol className="flex justify-center flex-col items-center text-l font-extrabold">
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center  hover:bg-black hover:text-[#86cbfd]">
                <a
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  Skills
                </a>
              </li>
              <li className="my-3 w-[100%] h-[45px] flex justify-center shadow-sm items-center hover:bg-black hover:text-[#86cbfd]">
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                >
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
          <ol className="hidden md:flex font-semibold text-sm lg:text-lg text-white mt-2">
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#home" style={{ textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#skills" style={{ textDecoration: "none" }}>
                Skills
              </a>
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#projects" style={{ textDecoration: "none" }}>
                Projects
              </a>
            </li>
            <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#profiles" style={{ textDecoration: "none" }}>
                Profiles
              </a>
            </li>
            {/*<li className="md:mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#achievements">Achievements</a>
      </li>*/}
            <li className="mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-black hover:text-[#86cbfd] hover:cursor-pointer">
              <a href="#contact" style={{ textDecoration: "none" }}>
                Contact
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="md:order-1 mr-[20px] h-[9vh] flex items-center justify-start md:ml-[20px]">
        <IconContext.Provider value={{ color: "white" }}>
          <TbSquareLetterGFilled className="text-5xl " />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default NavBar;
