import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-[1440px] h-[100px] bg-[#FBEBB5] text-[#000000] flex justify-between pr-[100px]">
        <div className="flex w-[430px] h-[24] px-[430px] py-[24px] gap-[75px]">
            <div>Home</div>
            <div>Shop</div>
            <div>About</div>
            <div>Contact</div>
        </div>

        <div className="w-[247px] h-[28px] flex gap-[45px] mt-[36px] ">

             <FaRegUser /> </div>
            <IoIosSearch /> 
            <CiHeart /> 
             <IoCartOutline /> 
        </div>
    

        
    </div>
  )
}

export default Navbar