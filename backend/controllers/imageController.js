const catchAsyncError = require("../middlewares/catchAsyncError");
const ImageUpload = require("../models/imageModel");
const path = require("path");
const fs = require("fs");

const addNewImage = catchAsyncError(async (req, res) => {
  const newImage = await ImageUpload.create({
    user: req.user._id,
    originalname: req.file.originalname,
    path: req.file.path,
  });
  await newImage.save();
  res.status(200).json({
    success: true,
    imageId: newImage._id,
    message: "New Pic Created Succesfully",
  });
});

const getResultImage = catchAsyncError(async (req, res) => {
  const imageId = req.params._id;
  console.log(imageId);
  const image = await ImageUpload.findById(imageId).populate(
    "result",
    "resultImagePath"
  );

  const imagePath = path.join(
    __dirname,
    `../../${image.result.resultImagePath}`
  );

  const stream = fs.createReadStream(imagePath);
  stream.pipe(res);
});


const getImage = catchAsyncError(async (req, res) => {
  const imageId = req.params._id;
  console.log(imageId);
  const image = await ImageUpload.findById(imageId);

  const imagePath = path.join(
    __dirname,
    `../../${image.path}`
  );

  const stream = fs.createReadStream(imagePath);
  stream.pipe(res);
});


module.exports = {
  addNewImage,
  getResultImage,
  getImage
};
