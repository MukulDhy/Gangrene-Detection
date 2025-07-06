const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const gernateJWTtoken = require("../utils/sendJWTToken");
const Counter = require("../models/counterModel");
const Doctor = require("../models/doctorModel");
const User = require("../models/userSchema");

/* Create New User -- Register */
const createNewDoctor = catchAsyncError(async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { newUserNumber: 1 } },
    { upsert: true, new: true }
  );

  const user = await User.create({
    userId: counter.newUserNumber,
    name: req.body.name ? req.body.name : `user ${counter.newUserNumber}`,
    email: req.body.email,
    password: req.body.password,
    role : req.body.role
  });
  await user.save();

  const newDoctor = await Doctor.create({
    user: user._id,
    name: req.body.name,
    qualification: req.body.qualification,
    experience: req.body.experience,
    specialist: req.body.specialist,
    address: req.body.address,
  });
  await newDoctor.save();

  gernateJWTtoken(user, 200, res);
});

/* Get Doctor Profile */

const getDoctorDetails = catchAsyncError(async (req, res, next) => {
  // console.log(req.user);
  const DoctorsData = [];
  for (let i = 0; i < req.body.doctorId.length; i++) {
    const doctor = await Doctor.find({ user: req.body.doctorId[i] });
    if (!doctor) {
      DoctorsData.push({ doctor: null });
    }
    DoctorsData.push({
      doctor,
    });
  }

  // if (!doctor) {
  //   return next(new ErrorHandler("Doctor is not Present", 404));
  // }
  res.status(200).json({
    success: true,
    DoctorsData,
  });
});

const getNearByDoctor = catchAsyncError(async (req,res,next) => {
  // Use the Google Places API to get place details based on the location input
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.body.location}&key=YOUR_GOOGLE_PLACES_API_KEY`
  );

  const data = await response.json();

  // Extract place ID from the first result
  const placeId = data.predictions[0].place_id;

  // Use the place ID to get details about the place, including nearby doctors

  if(!placeId){
      return next(new ErrorHandler("Place Id is not Correct", 404));
  }

  const detailsResponse = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=YOUR_GOOGLE_PLACES_API_KEY`
  );

  const detailsData = await detailsResponse.json();
  
  res.status(200).json({
    success : true,
    message : "Doctor Found",
    detailsData
  })


});


module.exports = {
  createNewDoctor,
  getDoctorDetails,
  getNearByDoctor
};
