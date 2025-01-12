import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Wrapper from "../Style/Cursor";
function Home() {
  const textColor = "#d2b48c";
  return (
    <Wrapper>
      <div
        id="home"
        className="flex flex-col justify-center items-center sticky pb-40 pt-32 md:pt-48 lg:pt-64"
      >
        {/* <Typography variant="h3" textAlign="center" className="text-[#03a56a]">
        Hey! I'm
      </Typography> */}
        <Typography variant="h1" textAlign="center" className="text-[#03a56a]">
          <b>Ayush Petkar</b>
        </Typography>
        <Typography variant="h2" textAlign="center" className="text-white">
          <div className="flex justify-center items-center">
            <ArrowForwardIosIcon
              className="text-[#4d514e]"
              style={{ fontSize: "2em" }}
            />{" "}
            <TypeAnimation
              sequence={[
                "Java Developer",
                3000,
                "SpringBoot Developer",
                3000,
                "React Developer",
                3000,
              ]}
              speed={20}
              repeat={Infinity}
              wrapper="span"
              className="text-white custom-cursor type-animation-font"
              cursor={true}
              style={{ fontSize: "2em", display: "inline-block"}}
            />
          </div>
        </Typography>
        <div className="pt-4 hover:cursor-pointer">
          <Link to="resume" smooth={true} duration={200} offset={-90}>
            <div className="animate-bounce pt-4">
              <IconButton>
                <ArrowDownwardIcon className="text-[#03a56a] size-max md:w-80 lg:w-full" />
              </IconButton>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
