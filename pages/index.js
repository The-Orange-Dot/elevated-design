import {
  Typography,
  Container,
  Button,
  Pagination,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { Box, style } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import gsap from "gsap";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress <= 100
          ? prevProgress + Math.floor(Math.random() * 16) + 10
          : prevProgress
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    progress < 100 ? setPageLoaded(false) : setPageLoaded(true);
  }, [progress]);

  useEffect(() => {
    gsap.set("#main-text", { opacity: 0 });
    gsap.set("#background-image", { opacity: 0, y: -10 });

    if (pageLoaded) {
      gsap.to("#background-image", { opacity: 1, duration: 0.5, y: 0 });
      gsap.to("#main-text", {
        opacity: 1,
        y: 20,
        delay: 0.5,
        duration: 1,
        ease: "Power1.out",
      });
    }
  }, [pageLoaded]);

  return (
    <>
      {pageLoaded ? null : (
        <Box className={styles.loading}>
          <Backdrop sx={{ color: "#000" }} open>
            <CircularProgress
              variant="determinate"
              color="primary"
              value={progress}
              size={80}
              thickness={5}
            />
          </Backdrop>
          <Typography variant="h4" className={styles.loading_text}>
            We&apos;ll get cookin&apos; in a sec
          </Typography>
          <Box className={styles.loading_background} />
        </Box>
      )}
      <Navbar color={"white"} />
      <Container className={styles.container}>
        <Typography
          variant="h2"
          className={styles.front_page_text}
          id="main-text"
        >
          Elevate your kitchen outside
        </Typography>
        <Button variant="contained" className={styles.button}>
          <Typography variant="button">Inquire</Typography>
        </Button>
        <Button variant="contained" className={styles.button}>
          <Typography variant="button">Gallery</Typography>
        </Button>
        <Image
          src="/images/home_image_1.jpeg"
          layout="fill"
          className={styles.background_image}
          alt="Home images"
          blurDataURL="/images/home_image_1.jpeg"
          onLoadingComplete={() =>
            setProgress((prevProgress) => prevProgress + 90)
          }
          id="background-image"
        />
        <Box className={styles.background_color} />
        <Typography className={styles.address} variant="overline">
          East Hampton, NY 11937
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
