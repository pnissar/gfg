import User from "../model/user.model.js";
const sv = async (req, res) => {
  try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email, password,photo:req.file?req.file.path:null });
      await newUser.save();
    res.status(201).json({ message: "User saved successfully", user: newUser });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default sv;