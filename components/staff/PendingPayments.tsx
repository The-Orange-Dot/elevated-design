import React from "react";
import { Paper } from "@mui/material";

const PendingPayments = ({ setSelectedClient }) => {
  return (
    <Paper
      sx={{ width: "99%", height: "40%", m: 1 }}
      onClick={() => {
        setSelectedClient({});
      }}
    >
      Pending Payments
    </Paper>
  );
};
export default PendingPayments;
