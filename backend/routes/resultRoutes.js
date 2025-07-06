const express = require("express");
const { isAuthorization } = require("../middlewares/authMiddleware");
// const { rockDetectionController, rockDetectionApi } = require("../controllers/machineLearningController");
// const { createNewUser } = require("../controllers/userController");

const resultRouter = express.Router();

// router
//   .route("/rockClassification")
//   .post(rockDetectionController);

// router
//   .route("/rockDetectionApi")
//   .post(rockDetectionApi);

// resultRouter.route("/pdf/gernate").post(isAuthorization)
// resultRouter.route("/pdf/get").post(isAuthorization)

module.exports = router;
