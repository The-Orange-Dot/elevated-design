import React from "react";
import styles from "../../styles/contact.module.css";
import {
  Paper,
  Typography,
  Box,
  InputBase,
  Divider,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const RequestInfoForm = ({ isMobile }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pl: 2,
        pr: 2,
        pt: 5,
        pb: 5,
        justifyContent: "space-around",
        minWidth: 320,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            width: "100%",
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={
            isMobile
              ? { fontWeight: 300 }
              : { fontWeight: 300, fontSize: "1.2rem" }
          }
        >
          In a hurry? Then just give us a call
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, fontSize: "1.2rem" }}
        >
          631-245-0789
        </Typography>
      </Box>
    </Box>
  );
};

export default RequestInfoForm;
