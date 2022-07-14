import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import RequestInfoForm from "../components/contact/RequestInfoForm";

const contact = () => {
  return (
    <>
      <Navbar color="white" />
      <Container className={styles.container}>
        <Typography
          sx={{ mb: 20, fontWeight: 400, color: "white" }}
          variant="h3"
        >
          Got questions? We&apos;ve got answers!
        </Typography>
        <Container className={styles.forms_container}>
          <Paper className={styles.request_info_container} elevation={3}>
            <RequestInfoForm />
          </Paper>
          <Paper className={styles.question_form_container} elevation={3}>
            <Typography>question form goes here</Typography>
          </Paper>
        </Container>
        <Image
          src="/images/contact_image.jpeg"
          alt="Good ol' grilling"
          layout="fill"
          className={styles.contact_background_image}
        />
      </Container>

      <Footer />
    </>
  );
};

export default contact;
