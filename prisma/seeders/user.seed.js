const { encrypt } = require("../../src/libs/bcrypt");
const prisma = require("../../src/libs/prisma");

const userSeed = async () => {
  const roles = [
    {
      name: "admin",
    },
    {
      name: "user",
    },
  ];

  await prisma.role.createMany({ data: roles });

  const createdRoles = await prisma.role.findMany();

  const users = [
    {
      fullname: "Fuji",
      email: "fuji@gmail.com",
      password: await encrypt("rahasia"),
      roleId: createdRoles[1].id,
    },
    {
      fullname: "Admin Fuji",
      email: "admin@gmail.com",
      password: await encrypt("rahasia"),
      roleId: createdRoles[0].id,
    },
  ];

  await prisma.user.createMany({ data: users });

  return;
};

module.exports = userSeed;
