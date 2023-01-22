const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email:{
    type: String,
    required: [true, 'Please add a valid email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  hashedPassword: {
    type:String,
    required: [true, "It's a mandatory to add a password"]
  }
});

const User = model("User", userSchema);

module.exports = User;
