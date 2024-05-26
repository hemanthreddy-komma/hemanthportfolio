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
    <div className="w-[100%] h-[9vh] bg-blue-200 text-white flex items-center flex-row-reverse md:flex-row">
      <div className="md:ml-[30px] md:mr-auto ml-auto">
        <IconContext.Provider value={{ color: "black" }}>
          <TbSquareLetterGFilled className="text-5xl mr-4" />
        </IconContext.Provider>
      </div>
      <div>
        <div className="mr-7 md:hidden" onClick={handleMenu}>
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
        <ol className="hidden md:flex font-bold text-sm lg:text-lg text-black">
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
  );
}

export default NavBar