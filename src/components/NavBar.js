import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSquareLetterGFilled } from "react-icons/tb";
const NavBar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const handleMenu=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="w-[100%] h-[9vh] bg-[#FFB1B1] text-white flex items-center flex-row-reverse md:flex-row">
      <div className="md:ml-[30px] md:mr-auto ml-auto">
        <TbSquareLetterGFilled className="text-5xl mr-4" />
      </div>
      <div>
        <div className="mr-7 md:hidden" onClick={handleMenu}>
          <GiHamburgerMenu className="text-2xl ml-4" />
        </div>
        {isOpen && (
          <div className="flex flex-col bg-transparent text-black md:hidden absolute z-[2] top-[8vh] left-0 w-[65vw] shadow-xl rounded-lg">
            <ol className="flex justify-center flex-col items-center">
              <li className="my-2 ">Home</li>
              <li className="my-2">Skills</li>
              <li className="my-2">Projects</li>
              <li className="my-2">Profiles</li>
              <li className="my-2">Achievements</li>
              <li className="my-2">Contact</li>
            </ol>
          </div>
        )}
        <ol className="hidden md:flex font-extrabold text-lg">
          <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-[#df7c7c]">
            Home
          </li>
          <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-[#df7c7c]">
            Skills
          </li>
          <li className="md:mr-[10px] lg:mr-[50px]  py-2 px-3 rounded-lg hover:bg-[#df7c7c]">
            Projects
          </li>
          <li className="md:mr-[10px] lg:mr-[50px] py-2 px-3 rounded-lg hover:bg-[#df7c7c]">
            Profiles
          </li>
          <li className="md:mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-[#df7c7c]">
            Achievements
          </li>
          <li className="mr-[10px] lg:mr-[30px] py-2 px-3 rounded-lg hover:bg-[#df7c7c]">
            Contact
          </li>
        </ol>
      </div>
    </div>
  );
}

export default NavBar