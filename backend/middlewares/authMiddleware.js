const ErrorHandler = require("../utils/ErrorHandler");
const jsonwebToken = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/userSchema");

const isAuthorization = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login first", 401));
  }

  console.log("Token from cookie:", token);

  try {
    const data = jsonwebToken.verify(token, process.env.JWT_KEY);
    console.log("Decoded user from token:", data);

    if (!data) {
      return next(new ErrorHandler("Invalid Token", 401));
    }
    const user = await User.findById(data.userId);
    req.user = user;
    next();
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Token verification error:", error);
    return next(new ErrorHandler("Invalid Token", 401));
  }
});

const authorizationRole = (...roles) =>
  catchAsyncError(async (req, res, next) => {
    // console.log(roles);
    // console.log(roles.includes(req.user.role));

    // console.log(res.isHod);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role : ${req.user.role} is not allowed to access this resources.`,
          403
        )
      );
    }

    next();
  });

module.exports = { isAuthorization, authorizationRole };
