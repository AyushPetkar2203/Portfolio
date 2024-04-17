import { CardMedia, List } from "@mui/material";
import styled from "styled-components";

export const Logo = styled.div`
  margin: 5px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }
`;

export const Items = styled.img`
  width: 100%;
  display: inline-block;
  max-width: 300px;
  
`;

export const LItem = styled(List)`
  text-decoration: none;
  position: relative;

  &:hover {
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
  &:hover::before {
    transform: scaleX(1);
  }
`;

export const cardM = styled(CardMedia)`
  text-decoration: none;
  position: relative;
  &:hover {
    color: #d2b48c;
  }
`;
