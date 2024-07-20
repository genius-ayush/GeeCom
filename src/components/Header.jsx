import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Header() {
    
    let [open , setOpen] = useState(false) ; 

    function handleClick(){
        setOpen(!open) ; 
    }
  return (
    <div className="h-20 2xl:h-32 w-full p-3 fixed top-0  bg-white z-50">
      <div className="p-5 flex items-center">
        <img
          src="/src/assets/logo.png"
          alt=""
          className="h-12 md:h-20 2xl:ml-96"
        />
        <div className="flex-grow">
          <div className="hidden lg:flex gap-3 ml-96 text-sm">
            <div className="hidden lg:flex items-center">
              <FaPhone className="mt-1" color="#8ec53e" />
              <div>+91-7259931071</div>
            </div>
            <div className="hidden lg:flex items-center">
              <IoIosMail color="#8ec53e" size={23} />
              <div>contact@geecomindia.com</div>
            </div>
            <div className="flex">
              <img src="/src/assets/googlePlay.png" alt="" className="h-10" />
            </div>
          </div>
          <div className="hidden lg:flex gap-6 p-2 ml-80 text-xs xl:text-sm">
            <div>Home</div>
            <div>About Us</div>
            <div>Mission & Vision</div>
            <div>Product</div>
            <div>Careers</div>
            <div>Contact</div>
            <div>Shop Now</div>
          </div>
        </div>
        <GiHamburgerMenu size={32} className="lg:hidden ml-auto" onClick={handleClick}/>
      </div>

      <div
        className={`fixed inset-0 bg-[#1C1D21] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end item-center p-3">

          <div className="md:hidden absolute right-10 top-10">
            <RxCross1 color="white" size={28} onClick={handleClick} />
          </div>

        </div>

        <div className="flex flex-col items-center space-y-4 mt-20 text-white">
          <a href="#" className="font-medium font-sans  text-2xl ">Home</a>
          <a href="#" className="font-medium font-sans  text-2xl ">About Us</a>
          <a href="#" className="font-medium font-sans  text-2xl ">Mission & Mission</a>
          <a href="#" className="font-medium font-sans  text-2xl ">Products</a>
          <a href="#" className="font-medium font-sans  text-2xl ">Careers</a>
          <a href="#" className="font-medium font-sans  text-2xl ">Contact</a>
          <a href="#" className="font-medium font-sans  text-2xl ">Shop Now</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
