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
import NewClientModal from "../components/staff/NewClientModal";
import InvoiceModal from "../components/staff/InvoiceModal";

const Staff = ({ clients }) => {
  const { data: session, status } = useSession();
  const [selectedClient, setSelectedClient] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [clientsData, setClientsData] = useState(clients);
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = `${session?.user.name.slice(0, 1).toUpperCase()}${
      session?.user.name.slice(1).split(" ")[0]
    }`;
    setUser(user);
    if (user !== "") {
      console.log(`Successfully logged in as ${session?.user.name}`);
    }
  }, [session]);

  if (status === "loading") {
    return <div>Checking credentials</div>;
  } else if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography className={styles.logo} variant="h5">
            Elevated Design
          </Typography>

          <Typography>Hey, {user}!</Typography>
        </Box>
        <Paper
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{ width: "50%", height: "100%", m: 1 }}
            onClick={() => {
              setSelectedClient({});
            }}
          >
            <Messages />
            <History />
          </Box>
          <Box sx={{ width: "50%", height: "100%", m: 1 }}>
            <ClientDetail
              clientsData={clientsData}
              setClientsData={setClientsData}
              setSelectedClient={setSelectedClient}
              selectedClient={selectedClient}
              setOpenModal={setOpenModal}
              setOpenInvoiceModal={setOpenInvoiceModal}
            />
            <PendingPayments setSelectedClient={setSelectedClient} />
          </Box>
        </Paper>
        <NewClientModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          clientsData={clientsData}
          setClientsData={setClientsData}
        />
        <InvoiceModal
          openInvoiceModal={openInvoiceModal}
          setOpenInvoiceModal={setOpenInvoiceModal}
        />
      </div>
    );
  } else {
    signIn();
    return <div>Redirecting to login page</div>;
  }
};

export async function getStaticProps() {
  try {
    const res = await fetch(`${server}/api/clients`);
    const clients = await res.json();
    return {
      props: {
        clients,
      },
    };
  } catch {
    return { notFound: true };
  }
}

export default Staff;
