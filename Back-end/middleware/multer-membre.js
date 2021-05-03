const multer = require("multer");

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images/membres')
  },
  filename: (req, file, callback) => {
    console.log(file)
    const name = file.originalname.split(' ').join('-');
    const extention = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extention);
  }
});

module.exports = multer({ storage }).single('image'); 