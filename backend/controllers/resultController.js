const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/ApiFeaturs");
const gernateJWTtoken = require("../utils/sendJWTToken");
const Counter = require("../models/counterModel");
const User = require("../models/userSchema");
const Result = require("../models/resultModel");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const gernateMedicalPdf = catchAsyncError(async (req, res) => {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream(filePath);

  // Pipe the PDF content to the file
  doc.pipe(stream);

  // Add content to the PDF
  doc.fontSize(16).text("Medical Report", { align: "center" });
  doc.moveDown();

  // Add patient information to the PDF
  doc.fontSize(12).text("Patient Information:");
  doc.moveDown();

  doc.text(`Name: ${patientData.name}`);
  doc.text(`Age: ${patientData.age}`);
  doc.text(`Diagnosis: ${patientData.diagnosis}`);
  // Add more information as needed

  // Finalize the PDF
  doc.end();

  console.log(`PDF generated successfully at: ${filePath}`);
});

/* Get Test Message  */
const createNewUser = catchAsyncError(async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { newUserNumber: 1 } },
    { upsert: true, new: true }
  );

  const newUser = await User.create({
    userId: counter.newUserNumber,
    name: req.body.name ? req.body.name : `user ${counter.newUserNumber}`,
  });
  await newUser.save();

  gernateJWTtoken(newUser, 200, res);
});

/* Create Result By the User */
const createResult = catchAsyncError(async (req, res) => {
  const newResult = await Result.create({
    user: req.user.userId,
    imageUrlId: req.body.imageUrlId,
    rockType: req.body.rockType,
    description: req.body.description,
    accuracy: req.body.accuracy,
  });
  await newResult.save();

  res.status(200).json({
    success: true,
    result: newResult,
    message: "Result Created Succesfully",
  });
});

/* Get Result By the User */
const getResult = catchAsyncError(async (req, res) => {
  const userResult = await Result.find({ user: req.user.userId });

  res.status(200).json({
    success: true,
    Result: userResult,
    message: "Result Extracted Succesfully",
  });
});

module.exports = {
  createNewUser,
};
