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

const createArticle = async (request, h) => {
  const { title, thumbnail, content, publishedAt } = request.payload;

  const newArticle = await prisma.article.create({
    data: { title, thumbnail, content, publishedAt },
  });

  return apiResponse(h, 201, "Artikel berhasil dibuat!", newArticle);
};

const updateArticle = async (request, h) => {
  const { id } = request.params;
  const { title, thumbnail, content, publishedAt } = request.payload;

  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) {
    return apiResponse(h, 404, "Artikel tidak ditemukan!", null);
  }

  const updatedArticle = await prisma.article.update({
    where: { id },
    data: { title, thumbnail, content, publishedAt },
  });

  return apiResponse(h, 200, "Artikel berhasil diperbarui!", updatedArticle);
};

const deleteArticle = async (request, h) => {
  const { id } = request.params;

  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) {
    return apiResponse(h, 404, "Artikel tidak ditemukan!", null);
  }

  await prisma.article.delete({
    where: {
      id: article.id,
    },
  });

  return apiResponse(h, 200, "Artikel berhasil dihapus!", null);
};

module.exports = {
  getAllArticles,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
