const prisma = require("../../libs/prisma");
const { bucket } = require("../../services/storage.service");
const apiResponse = require("../../utils/apiResponse");

const getAllArticles = async (request, h) => {
  const articles = await prisma.article.findMany();

  return apiResponse(h, 200, "Berhasil mendapatkan semua artikel!", articles);
};

const getOneArticle = async (request, h) => {
  const { id } = request.params;

  const article = await prisma.article.findFirst({
    where: { id },
  });

  if (!article) {
    return apiResponse(h, 404, "Artikel tidak ditemukan!", null);
  }

  return apiResponse(h, 200, "Berhasil mendapatkan artikel!", article);
};

const createArticle = async (request, h) => {
  const { title, content, publishedAt } = request.payload;
  const file = require.payload.thumbnail;

  if (!file) {
    return apiResponse(h, 400, "Thumbnail wajib ada!");
  }

  const blob = bucket.file(file.hapi.filename);
  const blobStream = blob.createWriteStream({
    resumable: false,
    contentType: file.hapi.headers["content-type"],
  });

  try {
    await new Promise((resolve, reject) => {
      blobStream.on("error", (err) => {
        reject(err);
      });

      blobStream.on("finish", resolve);

      blobStream.end(file._data);
    });

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        publishedAt,
        thumbnail: publicUrl,
      },
    });

    return apiResponse(h, 201, "Artikel berhasil dibuat!", newArticle);
  } catch (error) {
    return apiResponse(h, 500, "Failed to upload thumbnail.");
  }
};

const updateArticle = async (request, h) => {
  const { id } = request.params;
  const { title, content, publishedAt } = request.payload;
  const file = request.payload.thumbnail;

  let updateData = {
    title,
    content,
    publishedAt,
  };

  if (file) {
    const blob = bucket.file(file.hapi.filename);
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: file.hapi.headers["content-type"],
    });

    try {
      await new Promise((resolve, reject) => {
        blobStream.on("error", (err) => {
          console.error(err);
          reject(err);
        });

        blobStream.on("finish", resolve);

        blobStream.end(file._data);
      });

      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      updateData.thumbnail = publicUrl;
    } catch (error) {
      console.error(error);
      return apiResponse(h, 500, "Failed to upload thumbnail.");
    }
  }

  try {
    const updatedArticle = await prisma.article.update({
      where: { id },
      data: updateData,
    });

    return apiResponse(h, 200, "Artikel berhasil diperbarui!", updatedArticle);
  } catch (error) {
    console.error(error);
    return apiResponse(h, 500, "Failed to update article.");
  }
};

const deleteArticle = async (request, h) => {
  const { id } = request.params;

  try {
    const article = await prisma.article.findFirst({
      where: { id },
    });

    if (!article) {
      return apiResponse(h, 404, "Artikel tidak ditemukan!", null);
    }

    if (article.thumbnail) {
      const fileName = article.thumbnail.split("/").pop();
      const file = bucket.file(fileName);

      await file.delete();
    }

    await prisma.article.delete({
      where: { id },
    });

    return apiResponse(h, 200, "Artikel berhasil dihapus!", article);
  } catch (error) {
    console.error(error);
    return apiResponse(h, 500, "Failed to delete article.");
  }
};

module.exports = {
  getAllArticles,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
