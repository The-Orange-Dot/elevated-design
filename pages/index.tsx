import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import gsap from "gsap";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
    gsap.set(".button", { opacity: 0 });

    if (pageLoaded) {
      gsap.to("#background-image", { opacity: 1, duration: 0.5, y: 0 });
      gsap.to("#main-text", {
        opacity: 1,
        y: 20,
        delay: 0.5,
        duration: 1,
        ease: "Power1.out",
      });
      gsap.to(".button", { opacity: 1, duration: 0.5, delay: 0.5 });
    }
  }, [pageLoaded]);

  return (
    <>
      {pageLoaded ? null : (
        <div className={styles.loading}>
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
          <div className={styles.loading_background} />
        </div>
      )}
      <Navbar color={"white"} />
      <div className={styles.container}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 400,
            color: "white",
            textAlign: "center",
            m: 5,
          }}
          id="main-text"
        >
          Elevate your kitchen outside
        </Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: "5rem", p: "10px 30px", m: 0.5, zIndex: 1 }}
          className="button"
          onClick={() => {
            router.push("/contact");
          }}
        >
          <Typography variant="button">Inquire</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: "5rem", p: "10px 30px", m: 0.5, zIndex: 1 }}
          className="button"
          onClick={() => {
            router.push("/gallery");
          }}
        >
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
        <div className={styles.background_color} />
        <Typography
          sx={{
            position: "absolute",
            bottom: "5%",
            color: "white",
            fontSize: "1rem",
            fontWeight: 200,
          }}
          variant="overline"
        >
          East Hampton, NY 11937
        </Typography>
      </div>
      <Footer />
    </>
  );
}
