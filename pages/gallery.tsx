import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/gallery.module.css";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import ImageGallery from "../components/gallery/ImageGallery";

const gallery = () => {
  return (
    <>
      <Navbar color={"black"} />
      <Paper className={styles.container} elevation={0}>
        <ImageGallery />
      </Paper>
      <Footer />
    </>
  );
};

export default gallery;
