import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Router from "next/router";
import { Paper, Box, Typography } from "@mui/material";
import styles from "../styles/staff/dashboard.module.css";
import ClientDetail from "../components/staff/ClientDetail";
import History from "../components/staff/History";
import Messages from "../components/staff/Messages";
import PendingPayments from "../components/staff/PendingPayments";
import { server } from "../config";

const Staff = ({ clients }) => {
  const { data: session, status } = useSession();
  const [selectedClient, setSelectedClient] = useState({});

  useEffect(() => {
    console.log(selectedClient);
  }, [selectedClient]);

  if (status === "loading") {
    return <div>Checking credentials</div>;
  } else if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <Box>
          <Typography className={styles.logo} variant="h5">
            Elevated Design
          </Typography>
        </Box>
        <Paper
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: "50%", height: "100%", m: 1 }}>
            <Messages />
            <History />
          </Box>
          <Box sx={{ width: "50%", height: "100%", m: 1 }}>
            <ClientDetail
              clients={clients}
              setSelectedClient={setSelectedClient}
              selectedClient={selectedClient}
            />
            <PendingPayments />
          </Box>
        </Paper>
      </div>
    );
  } else {
    signIn();
    return <div>Redirecting to login page</div>;
  }
};

export async function getStaticProps() {
  const res = await fetch(`${server}/api/clients`);
  const clients = await res.json();
  return {
    props: {
      clients,
    },
  };
}

export default Staff;
