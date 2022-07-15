import {
  Paper,
  Typography,
  IconButton,
  InputBase,
  Divider,
  Grid,
  Box,
  Container,
} from "@mui/material";
import React from "react";
import styles from "../../styles/footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <div
      className={
        isMobile ? styles.mobile_footer_container : styles.footer_container
      }
    >
      <Box className={styles.footer_contact}>
        <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
          Request Info
        </Typography>
        <Typography variant="caption" sx={{ mb: 1 }}>
          Request information regarding our kitchen units
        </Typography>
        <Typography variant="caption" sx={{ color: "gray" }}>
          Enter your email:
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="example@email.com"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" aria-label="directions">
            <EmailIcon />
          </IconButton>
        </Paper>
      </Box>

      <Grid
        sx={
          isMobile
            ? {
                m: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                minWidth: "20%",
              }
            : {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                minWidth: "20%",
                flex: 1,
              }
        }
        container
        spacing={2}
      >
        <Grid item xl={4}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
            Explore
          </Typography>
          <Link href="/">
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { opacity: 0.5 } }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/gallery">
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { opacity: 0.5 } }}
            >
              Gallery
            </Typography>
          </Link>
        </Grid>
        <Grid item xl={4}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
            Company
          </Typography>
          <Link href={"/about"}>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { opacity: 0.5 } }}
            >
              About
            </Typography>
          </Link>
        </Grid>
        <Grid item xl={4}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", mb: 1, min: "30%" }}
          >
            Services
          </Typography>
          <Link href={"/contact"}>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { opacity: 0.5 } }}
            >
              Inquire
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
