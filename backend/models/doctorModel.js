const mongoose = require("mongoose");
const jsonwebToken = require("jsonwebtoken");

const doctorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: Number,
      unique: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: [true, "Please Enter the Your Name"],
    },
    experience: {
      type: Number,
      required: [true, "Please enter your experience"],
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: Number,
      },
      country: {
        type: Number,
      },
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
// doctorSchema.methods.gernateJWTtoken = function () {
//   return jsonwebToken.sign({ userId: this._id }, process.env.JWT_KEY, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

const Doctor = mongoose.model("Doctors", doctorSchema);
module.exports = Doctor;
