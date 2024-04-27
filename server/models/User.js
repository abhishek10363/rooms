const mongoose = require("mongoose");

const Userschema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,//pass:JH7GT4RfZr@EQZA
    },
    profileImagePath: {
      type: String,
      default: "",
    },
    triplist: {
      type: Array,
      default: [],
    },
    wishlist: {
      type: Array,
      default: [],
    },
    propertylist: {
      type: Array,
      default: [],
    },
    reservationlist: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", Userschema);
module.exports = User;
