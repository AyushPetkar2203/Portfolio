import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Ayushphoto from "../assets/Ayushphoto.jpg";
import { Download } from "@mui/icons-material";
import Swal from "sweetalert2";
import { Items, Logo } from "../Style/Logo";
import SpringBoot from "../assets/SpringBoot.png";
import Java from "../assets/Java.png";
import ReactImg from "../assets/ReactImg.png";
import MongoDB from "../assets/MongoDB.png";
import Javascript from "../assets/Javascript.png";
import SQL from "../assets/SQL.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function About() {
  const generatePDF = () => {
    const link = document.createElement("a");
    link.href =
      // "https://drive.google.com/file/d/1uSq7UA5s_IGjnoVQ414Vi8pTNgeAtpix/view?usp=drive_link";
      "https://drive.google.com/uc?export=download&id=17ZPovA-wdtJX9CQ9jeex_CSso3DD4LnN";
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    Swal.fire({
      title: "Success",
      text: "Resume download Successfully",
      icon: "success",
      confirmButtonText: "Cool",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  const items = {
    Birthday: "22nd March 2000",
    Phone: "+91 7744019562",
    City: "Nagpur, Maharashtra",
    Age: calculateAge("2000-03-22"),
    Degree: "Bachalore of Engineering in Computer Technology",
    Email: "ayushpetkar2203@gmail.com",
  };
  return (
    <>
      <div
        id="about"
        className="flex flex-col justify-center relative items-center"
      >
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="bold"
          className="pb-5 text-white"
        >
          About Me
        </Typography>
      </div>
      <div
        id="about"
        className="flex flex-col justify-center relative items-start"
      >
        <Typography sx={{ color: "white" }} variant="h6" className="pb-5">
          I’ve been working as a web developer for a few years now, and I’m
          passionate about everything that goes into making websites work well
          and look beautiful. The web is my passion because it’s where I can
          find the most exciting projects to work on. It’s also where I get to
          express my creativity in ways that are hard to find elsewhere.
        </Typography>
        <Typography variant="h3" sx={{ color: "white" }}>
          Web Developer
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white pt-4">
          <p className="flex items-center">
            <ArrowForwardIosIcon className="mr-2 text-[#03a56a]" />
            <b className="mr-2">Birthday: </b> {items.Birthday}
          </p>
          <p className="flex items-center">
            <ArrowForwardIosIcon className="mr-2 text-[#03a56a]" />{" "}
            <b className="mr-2">Phone: </b> {items.Phone}
          </p>
          <p className="flex items-center">
            <ArrowForwardIosIcon className="mr-2 text-[#03a56a]" />
            <b className="mr-2">City: </b> {items.City}
          </p>
          <div className="flex items-center w-full">
            <ArrowForwardIosIcon className="mr-2 text-[#03a56a]" />
            <b className="mr-2">Age: </b> {items.Age}
            <button
              onClick={generatePDF}
              className=" rounded-2xl ml-96 px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              Download CV
            </button>
          </div>
          <p className="flex items-center">
            <ArrowForwardIosIcon className="mr-2 text-[#03a56a]" />
            <b className="mr-2">Degree: </b> {items.Degree}
          </p>
          <p className="flex items-center">
            <ArrowForwardIosIcon className="mr-2 text-[#03a56a]" />
            <b className="mr-2">Email: </b> {items.Email}
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly space-x-6 items-center pt-8 md:pt-16 lg:pt-24">
          <Items src={Java} alt="Java" />
          <Items src={SpringBoot} alt="SpringBoot" className="h-24 mt-16" />
          <Items src={ReactImg} alt="React" className="h-48 w-40" />
          <Items src={MongoDB} alt="MongoDB" className="h-48" />
          <Items src={Javascript} alt="Javascript" className="h-48" />
          <Items src={SQL} alt="SQL" className="h-48" />
        </div>
        <div className="pb-60"></div>
      </div>
    </>
  );
}

export default About;
