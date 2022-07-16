import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const clients = await prisma.customer.findMany({
      orderBy: { lastName: "asc" },
      select: {
        id: true,
        address: true,
        city: true,
        email: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        zipcode: true,
      },
    });

    res.status(200).json(clients);
  } else if (req.method === "POST") {
    const clientData = req.body;

    const existingClient = await prisma.customer.findFirst({
      where: {
        AND: [
          { firstName: { equals: clientData.firstName } },
          { lastName: { equals: clientData.lastName } },
        ],
      },
    });

    console.log(existingClient);

    if (!existingClient) {
      const client = await prisma.customer.create({
        data: {
          ...clientData,
        },
      });

      console.log(client);
      res.status(201).json(client);
    }
  } else if (req.method === "DELETE") {
    const client = req.body;

    await prisma.customer.delete({
      where: {
        id: client,
      },
    });

    res.status(200).json(client);
  }
}
