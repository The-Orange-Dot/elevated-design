import React, { useState } from "react";
import {
  Modal,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
} from "@mui/material";

const NewClientModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: "60%",
            height: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            p: 7,
            borderRadius: "1rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            NEW CLIENT FORM
          </Typography>
          <Box
            sx={{
              width: "90%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField label="First Name" size="small" fullWidth />
              <TextField label="Last Name" size="small" fullWidth />
            </Box>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField label="Address" size="small" fullWidth />
            </Box>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField label="City" size="small" fullWidth />
              <TextField label="Zipcode" size="small" fullWidth />
            </Box>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField label="Email" size="small" fullWidth />
              <TextField label="Phone" size="small" fullWidth />
            </Box>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  p: 2,
                  pl: 4,
                  pr: 4,
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default NewClientModal;
