const mongoose = require("mongoose");
const jsonwebToken = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please Enter the Your Name"],
    },
    role: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

/* Create Json web Token */
userSchema.methods.gernateJWTtoken = function () {
  return jsonwebToken.sign({ userId: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
