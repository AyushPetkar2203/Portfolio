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
function About() {
  const generatePDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1uSq7UA5s_IGjnoVQ414Vi8pTNgeAtpix/view?usp=drive_link";
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
  return (
    <div
      id="about"
      className="flex flex-col justify-center relative z-10 items-center"
    >
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight="bold"
        className="pb-5 text-white"
      >
        About Me
      </Typography>
      <Typography textAlign="center" variant="h5" className="text-center">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3">
            <Card className="bg-black size-full">
              <CardMedia
                component="img"
                alt="Ayush Petkar"
                image={Ayushphoto}
                className="rounded-full h-48 w-48 mx-auto"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="white"
                  className="text-center"
                >
                  If you are looking for a web developer, then here I am
                </Typography>
              </CardContent>
              <CardActions disableSpacing className="flex justify-center">
                <IconButton aria-label="Download">
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<Download />}
                    className="rounded-full bg-yellow-400"
                    onClick={generatePDF}
                  >
                    Download CV
                  </Button>
                </IconButton>
              </CardActions>
            </Card>
          </div>
        </div>
      </Typography>
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
  );
}

export default About;
