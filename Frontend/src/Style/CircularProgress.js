import styled from "styled-components";
const Wrapper = styled.aside`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nanum Gothic Coding", sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: light blue;
  }

  .container {
    display: flex;
    width: 210px;
    padding: 10px 0;
    border-radius: 8px;
    background-color: #03a56a;
    flex-direction: column;
    align-items: center;
  }
  .circular-progress {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: conic-gradient(#7d2ae8 3.6deg, #f2f2f2 0deg);
  }

  .circular-progress:before {
    content: "";
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #03a56a;
    }

  .progress-value{
    position: relative;
    font-size:50px;
    font-weight:600;
    
  }
`;

export default Wrapper;
