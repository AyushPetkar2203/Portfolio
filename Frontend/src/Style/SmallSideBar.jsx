import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: sticky;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: 0.3s ease-in-out all;
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background-color: black;
  }
  .content {
    background: black;
    height: 95vh;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
  .nav-links-container {
    list-style-type: none; /* Remove default list styling */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column; /* Stack the links vertically */
  }
`;

// export const SideNavLinks = styled(Link)`
//   color: #808080;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   scroll-behavior: smooth;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   &:hover,
//   &.active {
//     color: #d2b48c;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     display: block;
//     width: 100%;
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: #d2b48c;
//     transform: scaleX(0);
//     transition: transform 0.3s ease;
//   }

//   &.hover::before {
//     tranform: scaleX(1);
//   }

//   &:after {
//     background: none repeat scroll 0 0 transparent;
//     bottom: 0;
//     content: "";
//     display: block;
//     height: 2px;
//     left: 50%;
//     position: relative;
//     background: #d2b48c;
//     transition: width 0.3s ease 0s, left 0.3s ease 0s;
//     width: 0;
//   }

//   &:hover:after {
//     width: 100%;
//     left: 0;
//   }
// `;
export default Wrapper;
