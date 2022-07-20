import type { NextApiRequest, NextApiResponse } from "next";
import { Client, Environment } from "square";
import crypto from "node:crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    //CHANGE SANDBOX TO PRODUCTION WHEN LIVE
    environment: Environment.Sandbox,
  });

  if (req.method === "POST") {
    const idempotencyKey = crypto.randomUUID();
    const locationId = process.env.SQUARE_LOCATION_ID;
    const data = req.body;

    console.log(data);

    const itemsCharged = data.items.map((item) => {
      return item;
    });

    try {
      const response = await client.ordersApi.createOrder({
        order: {
          locationId: locationId,
          lineItems: itemsCharged,
          taxes: [
            {
              uid: "new_york_tax",
              name: "New York Sales Tax",
              type: "ADDITIVE",
              percentage: "8.875",
              scope: "LINE_ITEM",
            },
          ],
          state: "OPEN",
          ticketName: data.clientName,
          pricingOptions: {
            autoApplyTaxes: true,
            autoApplyDiscounts: true,
          },
        },
        idempotencyKey: idempotencyKey,
      });

      console.log(response.result);
    } catch (error) {
      console.log(error);
    }
  }
}
