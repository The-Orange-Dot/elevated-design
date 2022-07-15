import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const client = new PrismaClient();

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  zipcode: string;
  city: string;
  dob: Date;
  address: string;
}

interface StaffData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  address: string;
  phoneNumber: string;
  active: boolean;
  email: string;
  dob: Date;
}

const seed = async () => {
  for (let i = 0; i < 10; i++) {
    const customer: CustomerData = {
      firstName: faker.name.firstName().toLowerCase(),
      lastName: faker.name.lastName().toLowerCase(),
      email: faker.internet.exampleEmail().toLowerCase(),
      username: faker.internet.userName().toLowerCase(),
      password: "password",
      phoneNumber: faker.phone.number(),
      zipcode: faker.address.zipCode(),
      city: faker.address.city().toLowerCase(),
      dob: faker.date.birthdate(),
      address: faker.address.streetAddress().toLowerCase(),
    };
    await client.customer.create({ data: customer });
  }

  await client.staff.create({
    data: <StaffData>{
      firstName: "hung",
      lastName: "le",
      username: "hungtestaccount",
      password: "password",
      address: faker.address.streetAddress().toLowerCase(),
      phoneNumber: faker.phone.number(),
      dob: faker.date.birthdate(),
      active: true,
      email: faker.internet.exampleEmail().toLowerCase(),
    },
  });
};

seed();
