const ErrorHandler = require("../utils/ErrorHandler");
const jsonwebToken = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/userSchema");

const isAuthorization = catchAsyncError(async (req, res, next) => {
  let token;

  // Accept token from Authorization header: Bearer <token>
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];

    // Remove extra quotes if present
    if (token.startsWith('"') && token.endsWith('"')) {
      token = token.slice(1, -1);
    }

    // Remove escaped quotes if present
    token = token.replace(/\\"/g, '"');
  }

  // Optional: Fallback to cookies if needed
  if (!token && req.cookies) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorHandler("Please login first", 401));
  }

  console.log("Token received:", token);

  try {
    const data = jsonwebToken.verify(token, process.env.JWT_KEY);
    console.log("Decoded user from token:", data);

    // Handle nested userId structure
    let userId;
    if (data.userId && typeof data.userId === "object" && data.userId._id) {
      userId = data.userId._id;
    } else if (data.userId) {
      userId = data.userId;
    } else {
      return next(new ErrorHandler("Invalid Token Structure", 401));
    }

    const user = await User.findById(userId);
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return next(new ErrorHandler("Invalid Token", 401));
  }
});

const authorizationRole = (...roles) =>
  catchAsyncError(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource.`,
          403
        )
      );
    }
    next();
  });

module.exports = { isAuthorization, authorizationRole };
