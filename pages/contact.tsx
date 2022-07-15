import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import RequestInfoForm from "../components/contact/RequestInfoForm";
import QuestionForm from "../components/contact/QuestionForm";

const contact = () => {
  return (
    <>
      <Navbar color="white" />
      <div className={styles.container}>
        <Typography
          sx={{ mb: 5, fontWeight: 400, color: "white" }}
          variant="h3"
        >
          Got questions? We&apos;ve got answers!
        </Typography>
        <div className={styles.forms_container}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "30%",
              height: "40vh",
              backgroundColor: "rgba(255, 255, 255, .9)",
            }}
            elevation={3}
          >
            <RequestInfoForm />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "65%",
              height: "40vh",
              backgroundColor: "rgba(255, 255, 255, .9)",
            }}
            elevation={3}
          >
            <QuestionForm />
          </Paper>
        </div>
        <Image
          src="/images/contact_image.jpeg"
          alt="Good ol' grilling"
          layout="fill"
          className={styles.contact_background_image}
          placeholder="blur"
          blurDataURL="/images/contact_image.jpeg"
        />
      </div>

      <Footer />
    </>
  );
};

export default contact;
