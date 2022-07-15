import { Typography, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../styles/navbar.module.css";
import { useMediaQuery } from "@mui/material";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

const Navbar = ({ color }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [textColor, setTextColor] = useState(color);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const query = useRouter();

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top -5px",
        end: "+=1",
        scrub: 1,
        onEnter: () => setTextColor("black"),
        onEnterBack: () => {
          if (query.pathname === "/" || query.pathname === "/contact") {
            setTextColor("white");
          }
        },
      },
    });

    tl.fromTo(
      "#container",
      {
        backgroundColor: "none",
      },
      {
        backgroundColor: "white",
        zIndex: 100,
      }
    );
  }, [isMobile, query]);

  return (
    <div
      className={
        isMobile ? styles.mobileNavbarContainer : styles.navbarContainer
      }
      id={"container"}
    >
      <div>
        <Link href="/">
          <Typography
            className={textColor === "white" ? styles.logo_white : styles.logo}
            variant="h5"
          >
            Elevated Design
          </Typography>
        </Link>
      </div>
      {isMobile ? (
        <MobileNavMenu color={textColor} />
      ) : (
        <div className={styles.navbar_selector}>
          <Link href="/">
            <Typography
              className={
                textColor === "white"
                  ? styles.selector_text_white
                  : styles.selector_text
              }
              variant="overline"
            >
              Home
            </Typography>
          </Link>
          <Link href="/about">
            <Typography
              className={
                textColor === "white"
                  ? styles.selector_text_white
                  : styles.selector_text
              }
              variant="overline"
            >
              About Us
            </Typography>
          </Link>
          <Link href="/gallery">
            <Typography
              className={
                textColor === "white"
                  ? styles.selector_text_white
                  : styles.selector_text
              }
              variant="overline"
            >
              Gallery
            </Typography>
          </Link>
          <Link href="/contact">
            <Typography
              className={
                textColor === "white"
                  ? styles.selector_text_white
                  : styles.selector_text
              }
              variant="overline"
            >
              Inquire Now
            </Typography>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
