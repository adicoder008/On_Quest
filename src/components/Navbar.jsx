import React,{useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home"); // Track the current

  return (
    <div className="NAVBAR sticky flex justify-between shadow-md items-center px-2 md:px-10">
      <div className="flex">
        {/* Hamburger Menu */}
        <button
          className="md:hidden px-2 mt-3"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu size={30} />
        </button>

        <img src='/OQLogoNew.svg' className="w-[100px] md:w-[130px] py-[0.7rem]" alt="" />
      </div>  

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[3vw] items-center cursor-pointer">
        <Link to='/' >Home</Link>
        <Link to='/TripPlanner' >Trip Planner</Link>
        <Link to='/Events'>Events</Link>
        <Link to='/About'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>

      {/* User Section */}
      <div className="flex">
        <img src="/UserIcon.png" className="w-[34px]" alt="" />
        <div className="flex justify-center items-center ml-2">
          Sign-In/Up
        </div>
      </div>

      {/* Mobile Sidebar (Sliding Menu) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={24} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-6 text-lg mt-10">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Trip Planner</li>
          <li className="hover:text-blue-500 cursor-pointer">Events</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
