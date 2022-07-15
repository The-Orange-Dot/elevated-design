import { Box, TextField, Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { numberWithCommas } from "../numberWithCommas";
const QuestionForm = () => {
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [budgetInput, setBudgetInput] = useState(0);
  const [pronounInput, setPronounInput] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const budgetHandler = (e: any) => {
    let reg = new RegExp("^[0-9]*$");
    if (reg.test(e)) {
      setBudgetInput(e);
    }
  };

  useEffect(() => {
    if (
      emailInput.includes("@") &&
      emailInput.length > 10 &&
      emailInput !== "" &&
      nameInput !== "" &&
      textInput !== ""
    ) {
      if (validateEmail(emailInput)) {
        setDisabledSubmit(false);
      } else {
        setDisabledSubmit(true);
      }
    } else {
      setDisabledSubmit(true);
    }
  }, [emailInput, nameInput, textInput]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        zIndex: 1,
        display: "flex",
        p: 3,
      }}
    >
      <Stack
        component="form"
        sx={{
          width: "30%",
          height: "90%",
          display: "flex",

          justifyContent: "space-between",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          variant="standard"
          label="Email*"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <TextField
          size="small"
          variant="standard"
          label="Name*"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <TextField size="small" variant="standard" label="Pronoun" />
        <TextField
          size="small"
          variant="standard"
          label="Budget"
          value={budgetInput === 0 ? "" : numberWithCommas(budgetInput)}
          onChange={(e) => {
            const noCommas = e.target.value.replace(/,/g, "");
            budgetHandler(noCommas);
          }}
        />
        <Button
          variant="contained"
          disabled={disabledSubmit}
          // onClick={() => test()}
        >
          Submit
        </Button>
      </Stack>

      <Box
        sx={{
          ml: 3,
          width: "70%",
          height: "95%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          multiline
          fullWidth
          rows={14}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          label="Your question goes here!"
        />
      </Box>
    </Box>
  );
};

export default QuestionForm;
