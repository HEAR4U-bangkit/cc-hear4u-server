const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");

const getAllArticles = async (request, h) => {
  try {
    const articles = await prisma.article.findMany();
    return apiResponse(h, 200, "Berhasil mendapatkan semua artikel!", articles);
  } catch (error) {
    return apiResponse(h, 500, "Gagal mendapatkan artikel!", null);
  }
};

const getOneArticle = async (request, h) => {
  const { id } = request.params;
  
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return apiResponse(h, 404, "Artikel tidak ditemukan!", null);
    }

    return apiResponse(h, 200, "Berhasil mendapatkan artikel!", article);
  } catch (error) {
    return apiResponse(h, 500, "Gagal mendapatkan artikel!", null);
  }
};

module.exports = { getAllArticles, getOneArticle };
