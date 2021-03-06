import { Typography, Paper, Container, Box } from "@mui/material";
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
      <div className={styles.container}>
        <Box
          sx={
            isMobile
              ? {
                  width: "95vw",
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  overflow: "hidden",
                }
              : {
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }
          }
        >
          <Box
            id="image-1-text"
            className={
              isMobile
                ? styles.mobile_about_text_container
                : styles.about_text_container
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
            sx={{
              width: 800,
              height: 450,
              overflow: "hidden",
              borderRadius: "1rem",
              zIndex: "-1",
            }}
            elevation={5}
            id="image-1"
          >
            <Image
              src="/images/cooking_outside.jpg"
              alt="Cook outside"
              width={800}
              height={isMobile ? 550 : 450}
              className={isMobile ? styles.mobile_image : null}
              placeholder="blur"
              blurDataURL="/images/cooking_outside.jpg"
              onLoadingComplete={() => setPageLoaded(true)}
            />
          </Paper>
        </Box>
      </div>

      {/* <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Typography>Blah Blah Blah, more info down here</Typography>
      </Box> */}
      {/* <Typography>Sharing is caring</Typography> */}
      {/* <Typography>Get some fresh air. You deserve it</Typography> */}
      <Footer />
    </>
  );
};

export default About;
