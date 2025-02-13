import User from "../model/user.model.js";
const phto = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  const { file } = req.file;
  const newUser = new User({
    username,
    email,
    password,
    photo: req.file ? req.file.path : null,
  });
  await newUser.save();
  console.log(file);
  return res.status(200).json({ newUser });
};
export default phto;
