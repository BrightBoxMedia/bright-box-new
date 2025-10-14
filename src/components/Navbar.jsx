import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineUp,
  AiOutlineDown,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";

export default function Navbar({
  contactRef,
  aboutRef,
  showScrollLinks = true,
  className = "fixed",
}) {
  const [showCommunity, setShowCommunity] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleScrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleScrollToAbout = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#about");
      setTimeout(() => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div>
      {/* Fixed Navbar */}
      <div className={`bg-[#FFFAF0] top-0 left-0 right-0 z-[60] ${className}`}>
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-bold text-lg">
          <div className="h-22 mt-6 sm:h-15 md:h-22">
            <a href="/">
              <img src="/bbm.png" className="h-20" alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2">
                Home
              </li>
            </Link>

            {showScrollLinks ? (
              <li
                onClick={handleScrollToAbout}
                className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2 cursor-pointer"
              >
                About
              </li>
            ) : (
              <Link to="/about">
                <li className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2">
                  About
                </li>
              </Link>
            )}

            <Link to="/services">
              <li className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2 cursor-pointer">
                Services
              </li>
            </Link>

            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="relative"
            >
              <li className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2 cursor-pointer flex items-center justify-between">
                <span className="flex items-center gap-1">
                  Community
                  {showDropdown ? (
                    <AiOutlineUp size={16} />
                  ) : (
                    <AiOutlineDown size={16} />
                  )}
                </span>
              </li>

              {showDropdown && (
                <ul className="absolute top-14 left-0 bg-[#1f1f1f] text-[#e0e0e0] shadow-lg text-md rounded-xl py-2 w-50 z-50">
                  <li className="px-4 py-2 cursor-pointer hover:bg-[#333]">
                    <a
                      href="https://www.instagram.com/brightbox_media/profilecard/?theme=dark"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiInstagram size={18} />
                      Instagram
                    </a>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-[#333]">
                    <a
                      href="https://www.facebook.com/people/Bright-Box-Media/61559693625624/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiFacebook size={18} />
                      Facebook
                    </a>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-[#333]">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiX size={18} />X
                    </a>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-[#333]">
                    <a
                      href="https://www.linkedin.com/in/bright-box-media-21790b30b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiLinkedin size={18} />
                      Linkedin
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {showScrollLinks ? (
              <li
                onClick={handleScrollToContact}
                className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2 cursor-pointer"
              >
                Contact
              </li>
            ) : (
              <Link to="/contact">
                <li className="mt-4 px-3 p-2 hover:text-[#8f012d] transition-all duration-200 mx-2">
                  Contact
                </li>
              </Link>
            )}
          </ul>

          {/* Mobile Hamburger Menu */}
          <div onClick={handleNav} className="block md:hidden z-[70]">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-24 left-0 right-0 bottom-0 bg-[#FFFAF0] text-black z-50 transition-transform duration-500 ease-in-out transform ${nav ? "translate-x-0" : "-translate-x-full"
          } flex flex-col justify-between md:hidden`}
      >
        {/* Menu Items */}
        <ul
          className="p-6 pt-8 flex-1"
          role="menu"
          aria-label="Mobile navigation"
        >
          <Link to="/" onClick={() => setNav(false)}>
            <li
              className="p-4 border-b flex gap-2 border-gray-600 hover:text-[#8f012d] text-lg"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></path>
              </svg>
              Home
            </li>
          </Link>

          {showScrollLinks ? (
            <li
              onClick={() => {
                handleScrollToAbout();
                setNav(false);
              }}
              className="p-4 border-b flex gap-2 border-gray-600 hover:text-[#8f012d] cursor-pointer text-lg"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z"></path>
              </svg>
              About
            </li>
          ) : (
            <Link to="/about" onClick={() => setNav(false)}>
              <li className="p-4 border-b border-gray-600 hover:text-[#8f012d] text-lg">
                About
              </li>
            </Link>
          )}

          <Link to="/services" onClick={() => setNav(false)}>
            <li className="p-4 border-b flex gap-2 border-gray-600 hover:text-[#8f012d] text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path>
              </svg>
              Services
            </li>
          </Link>

          {/* Community Dropdown with Toggle */}
          <li
            className="p-4 border-b border-gray-600 hover:text-[#8f012d] cursor-pointer text-lg"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={showCommunity}
            onClick={() => setShowCommunity(!showCommunity)}
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path>
              </svg>
              Community{" "}
              {showCommunity ? (
                <AiOutlineUp size={16} />
              ) : (
                <AiOutlineDown size={16} />
              )}
            </div>
            <ul
              className={`pl-4 pt-3 text-base space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${showCommunity ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <li className="hover:text-[#8f012d]">
                <a
                  href="https://www.instagram.com/brightbox_media/profilecard/?theme=dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                  onClick={() => setNav(false)}
                >
                  <SiInstagram size={20} />
                  Instagram
                </a>
              </li>
              <li className="hover:text-[#8f012d]">
                <a
                  href="https://www.facebook.com/people/Bright-Box-Media/61559693625624/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                  onClick={() => setNav(false)}
                >
                  <SiFacebook size={20} />
                  Facebook
                </a>
              </li>
              <li className="hover:text-[#8f012d]">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                  onClick={() => setNav(false)}
                >
                  <SiX size={20} />
                  Twitter
                </a>
              </li>
              <li className="hover:text-[#8f012d]">
                <a
                  href="https://www.linkedin.com/in/bright-box-media-21790b30b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                  onClick={() => setNav(false)}
                >
                  <SiLinkedin size={20} />
                  Linkedin
                </a>
              </li>
            </ul>
          </li>

          {showScrollLinks ? (
            <li
              onClick={() => {
                handleScrollToContact();
                setNav(false);
              }}
              className="p-4 hover:text-[#8f012d] flex gap-2 cursor-pointer text-lg"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"></path>
              </svg>
              Contact
            </li>
          ) : (
            <Link to="/contact" onClick={() => setNav(false)}>
              <li className="p-4 hover:text-[#8f012d] text-lg">Contact</li>
            </Link>
          )}
        </ul>

        {/* Logo at Bottom */}
        <div className="p-6 border-t flex flex-col justify-center items-center text-gray-500 border-gray-700">
          <span className="text-sm">
            &copy; 2025 Bright Box Media. All rights reserved.
          </span>
          <span className="text-xs">
            Branding by Trigonal Ventures Services Pvt. Ltd.
          </span>
        </div>
      </div>
      {/* background overlay when menu is open */}
      {nav && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-opacity-50 z-40 md:hidden"
          onClick={() => setNav(false)}
        />
      )}
    </div>
  );
}
