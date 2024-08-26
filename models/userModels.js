const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
    unique:true,
  },
  email: {
    type: String,
    required: [true, "email is require"],
    unique:true,
  },
  password: {
    type: String,
    required: [true, "password is require"],
    unique:true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    
  },
  isDoctor: {
    type: Boolean,
    default: false,
    
  },
  notifcation: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
