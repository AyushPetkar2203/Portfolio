import { Grid, Typography } from "@mui/material";
import React from "react";
import JobHunt from "../assets/JobHunt.svg";
import "../Style/Project.css";
function Project() {
  const textColor = "#d2b48c";

  return (
    <>
      <div id="project" className="text-white">
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          Projects
        </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          paddingBottom={5}
          paddingTop={5}
        >
          <Grid item xs={3}>
            <div className="container relative w-[50%]">
              <img src={JobHunt} alt="Job Hunt" className="image" />
              <div className="middle">
                <a className="text" href="https://job-hunt-vazy.onrender.com/">Job Hunt</a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Project;
