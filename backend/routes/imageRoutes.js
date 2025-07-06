const express = require("express");

const {
  addNewImage,
  getResultImage,
  getImage,
} = require("../controllers/imageController");
const { isAuthorization } = require("../middlewares/authMiddleware");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "backend/public/Images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.route("/new").post(isAuthorization, upload.single("file"), addNewImage);

router.route("/result/:_id").get(isAuthorization, getResultImage);
router.route("/get/:_id").get(isAuthorization, getImage);

module.exports = router;
