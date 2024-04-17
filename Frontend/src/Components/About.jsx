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
      className="flex flex-col justify-center relative z-[1] items-center"
    >
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight="bold"
        sx={{ paddingBottom: "20px", color: "white" }}
      >
        About Me
      </Typography>
      <Typography textAlign="center" variant="h5">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          display="flex"
        >
          <Grid item xs={3}>
            <Card
              sx={{ width: 800, borderBlock: "2px", backgroundColor: "black" }}
            >
              <CardMedia
                component="img"
                alt="Ayush Petkar"
                image={Ayushphoto}
                sx={{
                  borderRadius: "50%",
                  height: "300px",
                  width: "300px",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="white">
                  If you are looking for a web developer, then here I am
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                style={{
                  display: "inline",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton aria-label="Download">
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                      borderRadius: 28,
                      background: "#d2b48c",
                      alignContent: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={generatePDF}
                  >
                    Download CV
                  </Button>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Typography>
      <Logo
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "200px",
          paddingBottom: "200px",
        }}
      >
        <Items src={Java} alt="Java" />
        <Items
          src={SpringBoot}
          alt="SpringBoot"
          style={{ height: "100px", marginTop: "100px" }}
        />
        <Items
          src={ReactImg}
          alt="React"
          style={{ height: "300px", width: "250px" }}
        />
        <Items src={MongoDB} alt="MongoDB" style={{ height: "300px" }} />
        <Items src={Javascript} alt="Javascript" style={{ height: "300px" }} />
        Javascript
      </Logo>
    </div>
  );
}

export default About;
