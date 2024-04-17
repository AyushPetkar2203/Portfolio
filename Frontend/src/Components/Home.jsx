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
      className="flex flex-col justify-center relative z-[1] items-center pb-40"
    >
      <Typography
        variant="h4"
        textAlign="center"
        style={{ color: textColor, marginTop: 240 }}
      >
        Hey! I'm
      </Typography>
      <Typography variant="h4" textAlign="center" style={{ color: "white" }}>
        <b>Ayush Petkar</b>
      </Typography>
      <Typography variant="h2" textAlign="center" style={{ color: "white" }}>
        I'm a{" "}
        <TypeAnimation
          style={{ color: textColor, textDecorationLine: "underline" }}
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
        />
      </Typography>
      <div className="animate-bounce pt-4">
        <Link
          style={{ paddingBottom: 500 }}
          to="resume"
          smooth={true}
          duration={200}
          offset={-90}
        >
          <IconButton>
            <ArrowDownwardIcon
              style={{ color: textColor, height: "50px", width: "500px" }}
            />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
