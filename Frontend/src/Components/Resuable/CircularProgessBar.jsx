import React, { useEffect } from "react";
import Wrapper from "../../Style/CircularProgress";

function CircularProgessBar({ Value }) {
  let progressValue = document.querySelector(".progress-value");
  let CircularProgress = document.querySelector(".circular-progress");
  let progressStartValue = 0;
  let progresEndValue = Value;
  let speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    CircularProgress.style.background = `conic-gradient(#7d2ae8 ${
      progressStartValue * 3.6
    }deg, #f2f2f2 0deg)`;
    if (progressStartValue === progresEndValue) {
      clearInterval(progress);
    }
  }, speed);

  useEffect(() => {
    setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      CircularProgress.style.background = `conic-gradient(#7d2ae8 ${
        progressStartValue * 3.6
      }deg, #f2f2f2 0deg)`;
      if (progressStartValue === progresEndValue) {
        clearInterval(progress);
      }
    }, speed);
  },[]);
  return (
    <Wrapper>
      <div className="container">
        <div className="circular-progress">
          <span className="progress-value">{Value}</span>
        </div>
        <span className="progress-title">React</span>
      </div>
    </Wrapper>
  );
}

export default CircularProgessBar;
