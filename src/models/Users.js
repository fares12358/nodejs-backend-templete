// models/Users.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  accessToken: { type: String },
  refreshToken: { type: String, default: null },
  resetOTP: String,
  resetOTPExpires: Date,
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
