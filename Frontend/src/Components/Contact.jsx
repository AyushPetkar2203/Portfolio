import { Email, LinkedIn, Phone, Signpost } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Ayushphoto from "../assets/Ayushphoto.jpg";
function Contact() {
  const textColor = "#d2b48c";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      axios
        .post("http://localhost:3000/sendMail", formData)
        .then((res) => {
          Swal.fire({
            title: "Success",
            text: "Message send Sucessfully",
            icon: "success",
            confirmButtonText: "Cool",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            text: "Connection Error",
            icon: "error",
            confirmButtonText: "Cool",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "Required",
        text: "Please enter all details",
        icon: "warning",
        confirmButtonText: "Cool",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div id="contact">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ color: "white" }}
        >
          Contact
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <Card sx={{ height: "250px", width: "300px" }} id="address">
            <CardContent
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "black",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Signpost
                  style={{ color: textColor }}
                  sx={{ fontSize: "2.5rem" }}
                />
              </Avatar>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Typography fontWeight="bold" textAlign="center">
                Address
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingTop: "0px",
              }}
            >
              <Typography
                fontWeight="bold"
                textAlign="center"
                variant="h9"
                color="gray"
              >
                <a
                  href="http://ww.google.com/maps?q=Plot No. 2 Rukmini Nagar Aglawe Layout, Khat Road, Bhandara
                  441904"
                >
                  Plot No. 2 Rukmini Nagar Aglawe Layout, Khat Road, Bhandara
                  441904
                </a>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "250px", width: "300px" }} id="contactnumber">
            <CardContent
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "black",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Phone
                  style={{ color: textColor }}
                  sx={{ fontSize: "2.5rem" }}
                />
              </Avatar>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Typography fontWeight="bold" textAlign="center">
                Contact Number
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingTop: "0px",
              }}
            >
              <Typography
                fontWeight="bold"
                textAlign="center"
                variant="h9"
                color="gray"
              >
                <a href="tel:+917744019562">+91 7744019562</a>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "250px", width: "300px" }} id="emailaddress">
            <CardContent
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "black",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Email
                  style={{ color: textColor }}
                  sx={{ fontSize: "2.5rem" }}
                />
              </Avatar>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Typography fontWeight="bold" textAlign="center">
                Email Address
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingTop: "0px",
              }}
            >
              <Typography
                fontWeight="bold"
                textAlign="center"
                variant="h9"
                color="gray"
              >
                <a href="mailto:ayushpetkar2203@gmail.com">
                  ayushpetkar2203@gmail.com
                </a>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "250px", width: "300px" }} id="linkedin">
            <CardContent
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "black",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LinkedIn
                  style={{ color: textColor }}
                  sx={{ fontSize: "2.5rem" }}
                />
              </Avatar>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Typography fontWeight="bold" textAlign="center">
                LinkedIn
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingTop: "0px",
              }}
            >
              <Typography
                fontWeight="bold"
                textAlign="center"
                variant="h9"
                color="gray"
              >
                <a href="http://www.linkedin.com/in/ayush-petkar456">
                  ayush-petkar456
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {/* <Grid container direction="column" spacing={2} paddingTop="50px">
          <Grid item>
            <Typography
              fontWeight="bold"
              textAlign="center"
              variant="h5"
              sx={{ paddingBottom: "50px" }}
            >
              <span className="text-gray-50">Get In</span>
              <span className="text-[#d2b48c]">Touch</span>
            </Typography>
            <div className="container">
              <div className="flex flex-row">
                <Card
                  style={{
                    display: "flex",
                    backgroundColor: "black",
                  }}
                >
                  <CardContent>
                    <img
                      src={Ayushphoto}
                      alt="Ayush Petkar"
                      style={{
                        borderRadius: "50%",
                        height: "300px",
                        width: "300px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline",
                      }}
                    />
                  </CardContent>
                  <CardContent>
                    
                  </CardContent>
                </Card>
              </div>
            </div>
          </Grid>
        </Grid> */}

        <div className="relative flex items-top justify-center min-h-screen bg-black dark:bg-gray-900 sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Get in touch
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      Bhandara, Maharashtra, 441904
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +91 7744019562
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      ayushpetkar2203@gmail.com
                    </div>
                  </div>
                </div>

                <form
                  className="p-6 flex flex-col justify-center"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col">
                    <label for="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label for="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label for="email" className="hidden">
                      Message
                    </label>
                    <input
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Message"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* <div className="flex flex-col mt-2">
                    <label for="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="number"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div> */}

                  <button
                    type="submit"
                    className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
