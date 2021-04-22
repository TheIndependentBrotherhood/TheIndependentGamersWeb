const express = require("express");
const router = express.Router();
const uploadController = require("../../controllers/upload");
const upload = require("../middleware/upload");

router.post("/upload", upload.single("file"), uploadController.uploadFiles);

module.exports = routes;