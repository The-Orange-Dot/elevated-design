import React, { useEffect, useState } from "react";
import { Button, Modal, Paper } from "@mui/material";
import { server } from "../../config";

const InvoiceModal = ({ openInvoiceModal, setOpenInvoiceModal }) => {
  const [clientName, setClientName] = useState("");
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemNotes, setItemNotes] = useState("");

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItemHandler = (
    name: string,
    quantity: number = 1,
    price: number,
    notes: string
  ) => {
    const newItem = {
      clientName: clientName,
      quantity: quantity.toString(),
      itemType: "CUSTOM_AMOUNT",
      basePriceMoney: {
        amount: price,
        currency: "USD",
      },
      appliedTaxes: [
        {
          taxUid: "new_york_tax",
        },
      ],
      note: notes,
    };

    setItems([...items, newItem]);
  };

  const invoiceSubmitHandler = () => {
    const invoiceData = {
      items: items,
      name: name,
      discount: discount,
    };

    if (items.length > 0) {
      const res = fetch(`${server}/api/square`, {
        method: "POST",
        body: JSON.stringify(invoiceData),
        headers: { "Content-Type": "application/json" },
      });

      console.log(res);
    } else {
      console.log("You must include at least one item");
    }
  };

  return (
    <Modal
      open={openInvoiceModal}
      onClose={() => setOpenInvoiceModal(false)}
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
          width: "50%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          p: 7,
          borderRadius: "1rem",
        }}
      >
        <Button
          onClick={() => {
            addItemHandler(itemName, itemQuantity, itemPrice, itemNotes);
          }}
        >
          Add item
        </Button>
        <Button
          onClick={() => {
            invoiceSubmitHandler();
          }}
        >
          Test Submit Button
        </Button>
      </Paper>
    </Modal>
  );
};

export default InvoiceModal;
