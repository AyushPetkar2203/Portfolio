import {
  Avatar,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { NavLinks } from "../Style/Navbar";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
function Resume() {
  const textColor = "#d2b48c";

  const primarySkills = [
    {
      label: "Java",
      value: 80,
    },
    {
      label: "SpringBoot",
      value: 90,
    },
    {
      label: "ReactJS",
      value: 70,
    },
  ];

  const secondarySkills = [
    {
      label: "HTML 5",
      value: 80,
    },
    {
      label: "CSS",
      value: 75,
    },
    {
      label: "JavaScript",
      value: 80,
    },
  ];

  return (
    <>
      <div
        id="resume"
        className="flex flex-col lg:flex-row sticky pb-16 text-white container mx-auto px-4 lg:px-8"
      >
        <div className="lg:w-1/4 sticky top-20 lg:top-32 h-[80vh] hidden md:flex md:items-center md:space-x-10">
          <List className="pt-5">
            {["Education", "Experience", "Skills"].map((text, index) => (
              <NavLinks
                to={text}
                offset={-100}
                spy={true}
                duration={200}
                smooth={true}
                key={index}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <SchoolIcon className="text-white" />
                    ) : index === 1 ? (
                      <BusinessCenterIcon className="text-white" />
                    ) : (
                      <EmojiObjectsIcon className="text-white" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </NavLinks>
            ))}
          </List>
        </div>
        <div className="lg:w-3/4 pl-0 lg:pl-10">
          <div id="Education">
            <Typography
              sx={{
                color: "white",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
              variant="h3"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              Education
            </Typography>
            <Avatar
              sx={{
                backgroundColor: "white",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
                //   paddingLeft: "20px",
              }}
            >
              <SchoolIcon
                style={{ color: textColor }}
                sx={{ fontSize: "3.5rem" }}
              />
            </Avatar>
            <Typography
              sx={{ color: textColor }}
              variant="h6"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              2018-2022
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h4"
              paddingTop="20px"
              alignItems="flex-start"
              display="flex"
            >
              Bachelor of Enginnering in Computer Technology
            </Typography>
            <Typography
              fontWeight="bold"
              paddingBottom="50px"
              alignItems="flex-start"
              display="flex"
            >
              Rashtrasant Tukadoji Maharaj Nagpur University
            </Typography>
            <Avatar
              sx={{
                backgroundColor: "white",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
                //   paddingLeft: "20px",
              }}
            >
              <SchoolIcon
                style={{ color: textColor }}
                sx={{ fontSize: "3.5rem" }}
              />
            </Avatar>
            <Typography
              sx={{ color: textColor }}
              variant="h6"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              2016-2018
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h4"
              paddingTop="20px"
              alignItems="flex-start"
              display="flex"
            >
              H.S.S.C.
            </Typography>
            <Typography
              fontWeight="bold"
              paddingBottom="50px"
              alignItems="flex-start"
              display="flex"
            >
              Maharashtra State Board of Secondary & Higher Secondary Education
            </Typography>
            <Avatar
              sx={{
                backgroundColor: "white",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
                //   paddingLeft: "20px",
              }}
            >
              <SchoolIcon
                style={{ color: textColor }}
                sx={{ fontSize: "3.5rem" }}
              />
            </Avatar>
            <Typography
              sx={{ color: textColor }}
              variant="h6"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              2015-2016
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h4"
              paddingTop="20px"
              alignItems="flex-start"
              display="flex"
            >
              S.S.C.
            </Typography>
            <Typography
              fontWeight="bold"
              paddingBottom="50px"
              alignItems="flex-start"
              display="flex"
            >
              Central Board of Secondary Education
            </Typography>
          </div>
          <div id="Experience">
            <Typography
              sx={{
                color: "white",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
              variant="h3"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              Experience
            </Typography>

            <Avatar
              sx={{
                backgroundColor: "white",
                width: "80px",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BusinessCenterIcon
                style={{ color: textColor }}
                sx={{ fontSize: "3.5rem" }}
              />
            </Avatar>
            <Typography
              sx={{ color: textColor }}
              variant="h6"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              2022-Present
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h4"
              paddingTop="20px"
              alignItems="flex-start"
              display="flex"
            >
              System Engineer
            </Typography>
            <Typography
              fontWeight="bold"
              paddingBottom="50px"
              alignItems="flex-start"
              display="flex"
            >
              Infosys
            </Typography>
          </div>
          <div id="Skills">
            {/* Skills content */}
            <Typography
              sx={{
                color: "white",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
              variant="h3"
              fontWeight="bold"
              alignItems="flex-start"
              display="flex"
            >
              Skills
            </Typography>
            <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row">
              {primarySkills.map((e) => (
                <div className="flex pr-16">
                  <Card
                    style={{
                      height: "300px",
                      width: "240px",
                      marginBottom: "30px",
                      backgroundColor: textColor,
                    }}
                  >
                    <CardContent
                      sx={{
                        paddingBottom: { xs: 1, md: 2 }, // Padding bottom 8px for xs, 16px for md
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ textAlign: "center", paddingBottom: "20px" }}
                      >
                        {e.label}
                      </Typography>
                      <div className="w-[200] h-[200]">
                        <CircularProgressbar
                          value={e.value}
                          text={e.value + "%"}
                          styles={buildStyles({
                            textColor: "black",
                            pathColor: "black",
                            trailColor: "rgb(167,202,237)",
                          })}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex-col gap-6 hidden md:flex md:items-center lg:grid-cols-3">
              <Card
                sx={{
                  flex: { xs: "0 0 100%", md: "0 0 50%", lg: "0 0 33.3333%" }, // 100% width on xs, 50% width on md, 33.3333% width on lg
                  marginBottom: { xs: 2, lg: 4 }, // 8px margin on xs, 16px margin on lg
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  backgroundColor: textColor,
                }}
              >
                {secondarySkills.map((e) => (
                  <CardContent sx={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      alignItems="flex-start"
                      display="flex"
                    >
                      {e.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      alignItems="flex-start"
                      display="flex"
                    >
                      Progress: {e.value}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={e.value}
                      sx={{
                        height: 10,
                        borderRadius: 10,
                        width: "600px",
                        "& .MuiLinearProgress-root": {
                          backgroundColor: "lightgray",
                        },
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "black",
                        },
                      }}
                    />
                  </CardContent>
                ))}
              </Card>
            </div>
            <div>
              {/* md:hidden */}
              <div className="text-white flex-row flex md:hidden gap-3">
                {secondarySkills.map((e) => (
                  <Card
                    sx={{
                      backgroundColor: textColor,
                      height: "150px",
                      width: "120px",
                      marginBottom: "30px",
                    }}
                  >
                    <CardContent>
                      {e.label}
                      <div className="w-[100] h-[100]">
                        <CircularProgressbar
                          value={e.value}
                          text={e.value + "%"}
                          styles={buildStyles({
                            textColor: "black",
                            pathColor: "black",
                            trailColor: "rgb(167,202,237)",
                          })}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
