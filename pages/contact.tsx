import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import RequestInfoForm from "../components/contact/RequestInfoForm";
import QuestionForm from "../components/contact/QuestionForm";
import { useMediaQuery } from "@mui/material";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Navbar color="white" />
      <div className={isMobile ? styles.mobile_container : styles.container}>
        <Typography
          sx={
            isMobile
              ? { mb: 5, fontWeight: 400, color: "white", textAlign: "center" }
              : { mb: 5, fontWeight: 400, color: "white" }
          }
          variant="h3"
        >
          Got questions? We&apos;ve got answers!
        </Typography>
        <div
          className={
            isMobile ? styles.mobile_forms_container : styles.forms_container
          }
        >
          <Paper
            sx={
              isMobile
                ? {
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    height: "40vh",
                    backgroundColor: "rgba(255, 255, 255, .9)",
                    mb: 1,
                  }
                : {
                    display: "flex",
                    justifyContent: "space-around",
                    width: "30%",
                    height: "40vh",
                    backgroundColor: "rgba(255, 255, 255, .9)",
                  }
            }
            elevation={3}
          >
            <RequestInfoForm isMobile={isMobile} />
          </Paper>
          <Paper
            sx={
              isMobile
                ? {
                    display: "flex",
                    width: "100%",
                    height: "90vh",
                    backgroundColor: "rgba(255, 255, 255, .9)",
                  }
                : {
                    display: "flex",
                    justifyContent: "space-around",
                    width: "65%",
                    height: "40vh",
                    backgroundColor: "rgba(255, 255, 255, .9)",
                  }
            }
            elevation={3}
          >
            <QuestionForm isMobile={isMobile} />
          </Paper>
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Image
            src="/images/contact_image.jpeg"
            alt="Good ol' grilling"
            layout="fill"
            className={
              isMobile
                ? styles.mobile_contact_background_image
                : styles.contact_background_image
            }
            placeholder="blur"
            blurDataURL="/images/contact_image.jpeg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
