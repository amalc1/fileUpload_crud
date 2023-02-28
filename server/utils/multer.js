const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads");
  },
  filename: (req, file, callback) => {
    let ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    callback(null, Date.now() + "--" + file.originalname);
  },
});

module.exports = store = multer({ storage });
