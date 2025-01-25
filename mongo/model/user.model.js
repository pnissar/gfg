import mongoose from "mongoose";
const userSchme = mongoose.Schema({
  username: { type: String, required: ture },
  email: { type: String, required: ture, unique: trur },
  password: { type: String, required: ture },
});

const User = mongoose.model("User", userSchme);
export default User;