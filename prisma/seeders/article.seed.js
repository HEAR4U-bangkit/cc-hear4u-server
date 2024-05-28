const prisma = require("../../src/libs/prisma");

const articleSeed = async () => {
  const articles = [
    {
      title: "",
      thumbnail: "",
      content: "",
      // format date = YYYY-MM-DD H:M:S
      publishedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ];

  await prisma.article.createMany({ data: articles });

  return;
};

module.exports = articleSeed;
