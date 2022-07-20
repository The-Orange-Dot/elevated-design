import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import PaymentIcon from "@mui/icons-material/Payment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import styles from "../../styles/staff/ClientDetail.module.css";
import EmailIcon from "@mui/icons-material/Email";

const ClientDetailButtons = ({
  setOpenModal,
  setOpenInvoiceModal,
  deleteHandler,
  invoiceHandler,
  emailButton,
  paymentButton,
  deleteButton,
}) => {
  return (
    <ButtonGroup variant="contained" sx={{ height: "90%" }}>
      <Tooltip title="Add new client" placement="top" arrow>
        <Button
          sx={{ width: 100 }}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Send email" placement="top" arrow>
        <Button disabled={emailButton} sx={{ width: 100 }}>
          <EmailIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Send invoice" placement="top" arrow>
        <Button
          disabled={paymentButton}
          sx={{
            width: 100,
          }}
          onClick={() => {
            setOpenInvoiceModal(true);
          }}
        >
          <PaymentIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Delete client (permanent)" placement="top" arrow>
        <Button
          disabled={deleteButton}
          sx={{ width: 100 }}
          color="error"
          onClick={() => {
            deleteHandler();
          }}
        >
          <DeleteIcon />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

export default ClientDetailButtons;
