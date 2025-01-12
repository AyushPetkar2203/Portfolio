import styled from "styled-components";
const Wrapper = styled.aside`
.custom-cursor::after {
    content: "_";
    animation: blink 1s step-end infinite;
  }
  
  .custom-cursor .Typewriter__cursor {
    display: none;
  }
  
  @keyframes blink {
    from, to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
export default Wrapper;