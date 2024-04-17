import { Link } from "react-scroll";
import styled from "styled-components";

export const Navigationbar = styled.nav`
  background-color: #000000;
  height: 100px;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: right;
  justify-content: right;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLinks = styled(Link)`
  color: #808080;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  scroll-behavior: smooth;
  position: relative;

  &:hover,
  &.active {
    color: #d2b48c;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #d2b48c;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &.hover::before {
    tranform: scaleX(1);
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: relative;
    background: #d2b48c;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const NavbarLogo = styled.img`
  width: 150px;
  height: 90px;
  padding-left: 2.5rem;
`;
