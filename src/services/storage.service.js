const { Storage } = require("@google-cloud/storage");
const Multer = require("multer");
const configs = require("../configs");

const storage = new Storage();

const bucket = storage.bucket(configs.bucketName);

const multer = Multer({
  storage: Multer.memoryStorage,
});

module.exports = {
  bucket,
  multer,
};
