const { Storage } = require("@google-cloud/storage");
const Multer = require("multer");
const configs = require("../configs");

const storage = new Storage();

const bucket = storage.bucket(configs.bucketName);

const multer = Multer({
  storage: Multer.memoryStorage,
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});

module.exports = {
  bucket,
  multer,
};
