const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  phone_no: {
    type: String,
    required: true,
    minlength:10,
    maxlength:13,
    unique: true
  },
  city: {
    type:String,
    required: true,
    minlength:5,
    maxlength:50
  },
  is_merchant: {
    type: Boolean,
    required: true,
    default: false
  }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id:this._id, name:this.name }, process.env.jwtPrivateKey);
  return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;