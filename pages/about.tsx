import { Typography, Paper } from "@mui/material";
import { Container, Box } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/about.module.css";
import { useMediaQuery } from "@mui/material";
import gsap from "gsap";

const About = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    gsap.set("#image-1", { opacity: 0, x: 50 });
    gsap.set("#image-1-text", { opacity: 0, y: -30 });

    if (pageLoaded) {
      gsap.to("#image-1", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "Power1.out",
      });
      gsap.to("#image-1-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "Power1.out",
      });
    }
  }, [pageLoaded]);

  return (
    <>
      <Navbar color={"black"} />
      <Container className="main" style={{ padding: 0 }}>
        <Box
          className={isMobile ? styles.mobile_about_image : styles.about_image}
        >
          <Box
            id="image-1-text"
            className={styles.about_text_container}
            sx={
              isMobile
                ? { position: "absolute", zIndex: 1, color: "white" }
                : { flex: 1, opacity: 0 }
            }
          >
            <Typography
              sx={{
                fontWeight: 200,
                mt: 5,
                textAlign: "center",
              }}
              variant="h4"
            >
              Do <strong>more</strong> than just grill outside
            </Typography>
            <Typography variant="body1" sx={{ mt: 5 }}>
              <strong>Elevated Design</strong>&apos;s outdoor kitchen units give
              you the freedom to do more than just grill food. Impress your
              guests with full meals that others could only do in indoor
              kitchens.
            </Typography>
          </Box>
          <Paper
            className={styles.more_outside_image}
            elevation={5}
            id="image-1"
            sx={{ opacity: 0 }}
          >
            <Image
              src="/images/cooking_outside.jpg"
              alt="Cook outside"
              width={800}
              height={500}
              className={isMobile ? styles.mobile_image : null}
              placeholder="blur"
              blurDataURL="/images/cooking_outside.jpg"
              onLoadingComplete={() => setPageLoaded(true)}
            />
          </Paper>
        </Box>

        <Box sx={{ mt: 30 }}>
          <Typography>Blah Blah Blah, more info down here</Typography>
        </Box>
      </Container>
      {/* <Typography>Sharing is caring</Typography> */}
      {/* <Typography>Get some fresh air. You deserve it</Typography> */}
      <Footer />
    </>
  );
};

export default About;
