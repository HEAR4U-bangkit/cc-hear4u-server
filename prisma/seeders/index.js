const prisma = require("../../src/libs/prisma");
const articleSeed = require("./article.seed");
const userSeed = require("./user.seed");

async function main() {
  await userSeed();

  await articleSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
