import React from "react";
import Wrapper from "../Style/SmallSideBar";
import { NavLinks } from "../Style/Navbar";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { getSideBar, toggleSideBar } from "../redux/SideBarSlice/SideBarSlice";
function SmallSideBar() {
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
  const handleClose = () => {
    dispatch(toggleSideBar());
  };
  return (
    <Wrapper>
      <div className={sidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button type="button" className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
        <header>
          <img src={logo} className="h-50 w-50 flex items-center justify-items-center" />
        </header>

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
    </Wrapper>
  );
}

export default SmallSideBar;
