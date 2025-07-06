const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const gernateJWTtoken = require("../utils/sendJWTToken");
const Counter = require("../models/counterModel");
const User = require("../models/userSchema");

/* Create New User -- Register */
const createNewUser = catchAsyncError(async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { newUserNumber: 1 } },
    { upsert: true, new: true }
  );

  const newUser = await User.create({
    userId: counter.newUserNumber,
    name: req.body.name ? req.body.name : `user ${counter.newUserNumber}`,
    email: req.body.email,
    password: req.body.password,
    role : "user"
  });
  await newUser.save();

  gernateJWTtoken(newUser, 200, res);
});

/* Login user */
const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Provide the Email and Password", 404));
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return next(new ErrorHandler("User Does Not Exist", 404));
  }

  if (user.password !== password) {
    return next(new ErrorHandler("Password is Invalid", 401));
  }

  gernateJWTtoken(user, 200, res);
});

/* Get User Profile */
const getUserProfile = catchAsyncError(async (req, res, next) => {
  // console.log(req.user);
  const user = req.user;

  res.status(200).json({
    success: true,
    user,
  });
});

/* LogOut User */
const logOut = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });
  res.status(200).json({
    success: true,
    message: "LogOut SuccessFully",
  });
});

module.exports = {
  createNewUser,
  loginUser,
  getUserProfile,
  logOut,
};
