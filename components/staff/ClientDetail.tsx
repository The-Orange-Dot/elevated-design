import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import styles from "../../styles/staff/ClientDetail.module.css";
import { server } from "../../config/index";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import PaymentIcon from "@mui/icons-material/Payment";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ClientDetail = ({
  clientsData,
  setClientsData,
  setSelectedClient,
  selectedClient,
  setOpenModal,
}) => {
  const [emailButton, setEmailButton] = useState(true);
  const [paymentButton, setPaymentButton] = useState(true);
  const [deleteButton, setDeleteButton] = useState(true);

  const clickHandler = (client: any) => {
    setSelectedClient(client);
  };

  useEffect(() => {
    if (selectedClient.id) {
      setEmailButton(false);
      setPaymentButton(false);
      setDeleteButton(false);
    } else {
      setEmailButton(true);
      setPaymentButton(true);
      setDeleteButton(true);
    }
  }, [selectedClient]);

  const deleteHandler = async () => {
    const res = await fetch(`${server}/api/clients`, {
      method: "DELETE",
      body: JSON.stringify(selectedClient.id),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      const resData = await res.json();
      const updatedClients = clientsData.filter((client) => {
        return client.id !== resData;
      });

      setClientsData(updatedClients);
      setSelectedClient({});
    }
  };

  return (
    <Paper sx={{ width: "99%", height: "60%", m: 1 }}>
      <TableContainer
        component={Paper}
        variant="outlined"
        square
        sx={{
          overflow: "scroll",
          width: "100%",
          height: "90%",
          pb: 1,
        }}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{ backgroundColor: "lightBlue" }}>
            <TableRow>
              <TableCell align="left">
                <AccountBoxIcon />
              </TableCell>
              <TableCell align="center">
                <EmailIcon />
              </TableCell>
              <TableCell align="center">
                <PhoneIcon />
              </TableCell>
              <TableCell align="right">
                <HomeIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ mt: 1, mb: 1 }}>
            {clientsData.length
              ? clientsData.map((client) => {
                  return (
                    <TableRow
                      key={`${client?.lastName}_${client?.firstName}`}
                      sx={
                        selectedClient?.id === client?.id
                          ? {
                              cursor: "pointer",
                              height: 70,
                              "&:last-child td, &:last-child th": {
                                border: 0,
                                mb: 1,
                              },
                              backgroundColor: "#dfdfdf",
                              border: "1px solid gray",
                            }
                          : {
                              cursor: "pointer",
                              height: 70,
                              "&:last-child td, &:last-child th": {
                                border: 0,
                                mb: 1,
                              },
                              "&:hover": { backgroundColor: "#dfdfdf" },
                            }
                      }
                      onClick={() => clickHandler(client)}
                    >
                      <TableCell component="th" scope="row">
                        {`${client?.lastName
                          .slice(0, 1)
                          .toUpperCase()}${client?.lastName.slice(
                          1
                        )}, ${client?.firstName
                          .slice(0, 1)
                          .toUpperCase()}${client?.firstName.slice(1)}`}
                      </TableCell>
                      <TableCell align="center">{client?.email}</TableCell>
                      <TableCell align="center">
                        {client?.phoneNumber}
                      </TableCell>
                      <TableCell align="right">{`${client?.address}, ${client?.city}, ${client?.zipcode}`}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper
        elevation={0}
        square
        sx={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ButtonGroup variant="contained" sx={{ height: "90%" }}>
          <Button
            sx={{ width: 100 }}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <AddIcon />
          </Button>
          <Button disabled={emailButton} sx={{ width: 100 }}>
            <EmailIcon />
          </Button>
          <Button disabled={paymentButton} sx={{ width: 100 }}>
            <PaymentIcon />
          </Button>
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
        </ButtonGroup>

        <TextField size="small" label="Search" />
      </Paper>
    </Paper>
  );
};

export default ClientDetail;
