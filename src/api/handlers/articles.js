const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");

const getAllArticles = async (request, h) => {
  const articles = await prisma.article.findMany();

  return apiResponse(h, 200, "Berhasil mendapatkan semua artikel!", articles);
};

const getOneArticle = async (request, h) => {
  const { id } = request.params;

  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) {
    return apiResponse(h, 404, "Artikel tidak ditemukan!", null);
  }

  return apiResponse(h, 200, "Berhasil mendapatkan artikel!", article);
};

module.exports = { getAllArticles, getOneArticle };
