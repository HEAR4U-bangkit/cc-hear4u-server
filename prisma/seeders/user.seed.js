const { encrypt } = require("../../src/libs/bcrypt");
const prisma = require("../../src/libs/prisma");

const userSeed = async () => {
  const users = [
    {
      fullname: "Fuji",
      email: "fuji@gmail.com",
      password: await encrypt("rahasia"),
    },
    {
      fullname: "Fuji 2",
      email: "fuji2@gmail.com",
      password: await encrypt("rahasia"),
    },
  ];

  await prisma.user.createMany({ data: users });

  return;
};

module.exports = userSeed;
