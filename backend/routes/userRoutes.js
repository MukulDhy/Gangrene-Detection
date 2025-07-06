const express = require("express");
const {
  createNewUser,
  logOut,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const { isAuthorization } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/new").post(createNewUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logOut);

router.route("/me").get(isAuthorization, getUserProfile);

module.exports = router;
