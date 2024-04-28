import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Home() {
  const textColor = "#d2b48c";
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center relative z-10 pb-40 pt-32 md:pt-48 lg:pt-64"
    >
      <Typography variant="h4" textAlign="center" className="text-[#d2b48c]">
        Hey! I'm
      </Typography>
      <Typography variant="h4" textAlign="center" className="text-white">
        <b>Ayush Petkar</b>
      </Typography>
      <Typography variant="h2" textAlign="center" className="text-white">
        I'm a{" "}
        <TypeAnimation
          sequence={[
            "Java Developer.",
            3000,
            "SpringBoot Developer.",
            3000,
            "React Developer.",
            3000,
            "Web Designer.",
            3000,
          ]}
          speed={20}
          repeat={Infinity}
          wrapper="span"
          className="text-[#d2b48c] underline"
        />
      </Typography>
      <div className="animate-bounce pt-4">
        <Link to="resume" smooth={true} duration={200} offset={-90}>
          <IconButton>
            <ArrowDownwardIcon className="text-[#d2b48c] size-max md:w-80" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
