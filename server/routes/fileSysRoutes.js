const express = require("express");
const { uploadFiles } = require("../controllers/fileController");
const router = express.Router();
const upload = require("../utils/multer");

router.route("/upload").post(upload.single("files"), uploadFiles);

module.exports = router;
