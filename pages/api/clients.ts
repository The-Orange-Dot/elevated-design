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
        username: true,
        zipcode: true,
      },
    });

    res.status(200).json(clients);
  }
}
