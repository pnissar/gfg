import mongoose from "mongoose";
const userSchme = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo:{type:String}
});

const User = mongoose.model("User", userSchme);
export default User;