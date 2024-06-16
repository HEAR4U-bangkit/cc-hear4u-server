const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");

const getDashboardData = async (request, h) => {
  const totalUserCount = await prisma.user.count({
    where: {
      role: {
        name: "user",
      },
    },
  });

  const totalAdminCount = await prisma.user.count({
    where: {
      role: {
        name: "admin",
      },
    },
  });

  const totalArticleCount = await prisma.article.count();

  const latestArticle = await prisma.article.findMany({
    orderBy: {
      publishedAt: "desc",
    },
    take: 5,
    select: {
      id: true,
      title: true,
      thumbnail: true,
      publishedAt: true,
    },
  });

  const articlesPerMonth = await prisma.article.groupBy({
    by: ["publishedAt"],
    _count: {
      publishedAt: true,
    },
    orderBy: {
      publishedAt: "asc",
    },
  });

  const articlesPerMonthFormatted = articlesPerMonth.map((item) => ({
    month: item.publishedAt.getMonth() + 1,
    year: item.publishedAt.getFullYear(),
    count: item._count.publishedAt,
  }));

  return apiResponse(h, 200, "Berhasil mendapatkan data!", {
    totalUserCount,
    totalAdminCount,
    totalArticleCount,
    latestArticle,
    articlesPerMonth: articlesPerMonthFormatted,
  });
};

module.exports = {
  getDashboardData,
};
