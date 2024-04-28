import React from "react";
import logo from "../assets/logo.svg";
import {
  NavItems,
  NavLinks,
  NavbarContainer,
  NavbarLogo,
  Navigationbar,
} from "../Style/Navbar.js";
import { FaAlignRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getSideBar,
  toggleSideBar,
} from "../redux/SideBarSlice/SideBarSlice.jsx";
import SmallSideBar from "./SmallSideBar.jsx";

function Navbar() {
  const navlink = [
    {
      to: "home",
      name: "Home",
    },
    {
      to: "about",
      name: "About",
    },
    {
      to: "resume",
      name: "Resume",
    },
    {
      to: "project",
      name: "Projects",
    },
    {
      to: "contact",
      name: "Contact",
    },
  ];
  const dispatch = useDispatch();
  const sidebar = useSelector(getSideBar);
  const handleClick = () => {
    dispatch(toggleSideBar());
  };
  return (
    // < !--component -- >
    // <nav className="bg-black shadow shadow-gray-300 w-100">
    //   <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
    //     {/* <!-- Logo --> */}
    //     <div className="text-indigo-500 md:order-1">
    //       {/* <!-- Heroicon - Chip Outline --> */}
    //       <img src={logo} className="logo" alt="Ayush logo" />
    //     </div>
    //     <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
    //       <ul className="flex font-semibold justify-between">
    //         {/* <li className="md:px-4 md:py-2 hover:text-[#D2B48C] hover:underline"><a href="#">Resume</a></li> */}
    //         {/* underline transition duration-300 ease-in-out */}
    //         {navlink.map((link) => {
    //           return (
    //             // <li className="md:px-4 md:py-2 hover:text-[#D2B48C] p-2 px-4 group"><Link to={link.to} activeStyle={{ color: '#D2B48C' }} spy={true} smooth={true} duration={200} offset={-100}>{link.name}<div className="bg-[#D2B48C] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link></li>
    //             <NavLinks
    //               to={link.to}
    //               spy={true}
    //               smooth={true}
    //               duration={200}
    //               offset={-100}
    //             >
    //               {link.name}
    //             </NavLinks>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <>
      {/* <Navigationbar>
        <NavbarContainer>
          <NavbarLogo src={logo} alt="Ayush" />
          <NavItems>
            <div>
              <button className="md:hidden bg-[#d2b48c] border-transparent text-[1.75rem] cursor-pointer flex items-center">
                <FaAlignRight />
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-10">
              {navlink.map((link) => (
                <NavLinks
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-100}
                >
                  {link.name}
                </NavLinks>
              ))}
            </div>
          </NavItems>
        </NavbarContainer>
      </Navigationbar> */}
      <nav className="sticky top-0 z-10 flex items-center justify-center h-[100px] bg-black">
        <div className="flex w-[90vw] items-center justify-between">
          <NavbarLogo src={logo} alt="Ayush" />
          <div>
            <button
              type="button"
              className="md:hidden bg-transparent border-transparent text-[1.75rem] cursor-pointer flex items-center text-[#d2b48c]"
              onClick={handleClick}
            >
              <FaAlignRight />
            </button>
            <div className="hidden md:flex md:items-center md:space-x-10">
              {navlink.map((link) => (
                <NavLinks
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-100}
                >
                  {link.name}
                </NavLinks>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {sidebar ? <SmallSideBar /> : ""}
    </>
  );
}

export default Navbar;
