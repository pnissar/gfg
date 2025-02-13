import User from "../model/user.model.js";
const up = async (req, res) => {
  try {
    const { username } = req.query;
    console.log(username);
    const { email, password } = req.body;
    const data = await User.findOne({ username });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    }
    data.email = email;
    data.password = password;
    console.log(data);
    await data.save();
    res.json(data);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default up;
