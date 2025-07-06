const express = require("express");
const {
  createNewDoctor,
  getDoctorDetails,
} = require("../controllers/doctorController");
const {
  isAuthorization,
  authorizationRole,
} = require("../middlewares/authMiddleware");

const doctorRoute = express.Router();

doctorRoute
  .route("/detail")
  .post(isAuthorization, authorizationRole("doctor", "user"), getDoctorDetails);

doctorRoute
  .route("/new")
  .post(createNewDoctor);

module.exports = router;
