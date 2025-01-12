import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import JobHunt from "../assets/JobHunt.svg";
import "../Style/Project.css";
import { TypeAnimation } from "react-type-animation";
function Project() {
  const textColor = "#03a56a";
  const [start, setStart] = useState(false);
  const [rest, setRest] = useState(false);
  const [link, setLink] = useState(false);
  return (
    <>
      <div id="project" className="text-white">
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="bold"
          padding="20px"
        >
          Projects
        </Typography>
        {/* <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          paddingBottom={5}
          paddingTop={5}
        >
          <Grid
            item
            xs={3}
            // style={{
            //   transition: "transform 0.3s", // Add transition for smooth flip effect
            //   "&:hover": {
            //     transform: "rotateY(180deg)", // Rotate the paper on hover
            //   },
            // }}
          >
            <div className="container relative w-[50%]">
              <img src={JobHunt} alt="Job Hunt" className="image" />
              <div className="middle">
                <a className="text" href="https://job-hunt-vazy.onrender.com/">
                  Job Hunt
                </a>
              </div>
              <div className=""></div>
            </div>
          </Grid>
        </Grid> */}
        {/* <Card
          className={`relative cursor-pointer perspective-1000 transition-transform duration-500 ${
            isFlipped ? "transform rotate-y-180" : ""
          }`}
          onClick={handleFlip}
        >
          <CardContent className="absolute w-full h-full backface-hidden">
            <div className={`front h-full ${isFlipped ? "hidden" : "block"}`}>
              <Typography variant="h5" component="h2">
                Front Content
              </Typography>
            </div>
            <div className={`back h-full ${isFlipped ? "block" : "hidden"}`}>
              <Typography variant="h5" component="h2">
                Back Content
              </Typography>
            </div>
          </CardContent>
        </Card> */}
        <div className="flex items-center justify-center p-4">
          <div
            className="card-container"
            onMouseEnter={() => {
              setTimeout(() => {
                setStart(true);
              }, 1000);
            }}
            onMouseLeave={() => {
              setStart(false);
              setRest(false);
              setLink(false);
            }}
          >
            <div className="card">
              <div className="front">
                <img src={JobHunt} alt="Job Hunt" className="image" />
              </div>
              <div className="back">
                {/* <TypeAnimation speed={50}>
                  <h2>Back Side</h2>
                  <p>This is the back side of the card.</p>
                </TypeAnimation> */}
                {/* Effortlessly manage your job applications, stay on top of deadlines, and track your progress towards your next career move. */}
                {start ? (
                  <>
                    <h1 className="text-2xl">
                      <TypeAnimation
                        cursor={false}
                        sequence={[
                          "Job Hunt",
                          () => {
                            setRest(true);
                          },
                        ]}
                        speed={-10}
                        repeat={0}
                        wrapper="h1"
                        className="text-[#03a56a] underline"
                      />
                    </h1>
                    {rest ? (
                      <p className="pt-4 justify-evenly text-start">
                        <TypeAnimation
                          cursor={false}
                          sequence={[
                            "Effortlessly manage your job applications, stay on top of deadlines, and track your progress towards your next career move.",
                            () => {
                              setLink(true);
                            },
                          ]}
                          speed={30}
                          repeat={0}
                          className="text-black"
                        />
                      </p>
                    ) : (
                      ""
                    )}
                    {link ? (
                      <h3 className="text-[#03a56a] items-end justify-end pt-3">
                        <a href="https://job-hunt-vazy.onrender.com/">
                          Explore the App-{">"}
                        </a>
                      </h3>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
