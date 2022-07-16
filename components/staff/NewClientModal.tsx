import React, { useState } from "react";
import {
  Modal,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { server } from "../../config";

const NewClientModal = ({
  openModal,
  setOpenModal,
  clientsData,
  setClientsData,
}) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [zipcodeInput, setZipcodeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const submitHandler = async () => {
    const client = {
      firstName: firstNameInput.toLowerCase(),
      lastName: lastNameInput.toLowerCase(),
      address: addressInput.toLowerCase(),
      city: cityInput.toLowerCase(),
      zipcode: zipcodeInput,
      email: emailInput.toLowerCase(),
      phoneNumber: phoneInput,
    };

    fetch(`${server}/api/clients`, {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setClientsData([data, ...clientsData]);
        setOpenModal(false);
        console.log(data);
      });
  };

  return (
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
            <TextField
              label="First Name"
              size="small"
              fullWidth
              value={firstNameInput}
              onChange={(e) => setFirstNameInput(e.target.value)}
            />
            <TextField
              label="Last Name"
              size="small"
              fullWidth
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Address"
              size="small"
              fullWidth
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="City"
              size="small"
              fullWidth
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            <TextField
              label="Zipcode"
              size="small"
              fullWidth
              value={zipcodeInput}
              onChange={(e) => setZipcodeInput(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Email"
              size="small"
              fullWidth
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <TextField
              label="Phone"
              size="small"
              fullWidth
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
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
              onClick={() => submitHandler()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default NewClientModal;
