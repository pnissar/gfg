import User from "../model/user.model.js";
const del = async (req, res) => {
  try {
    const { username } = req.query;
    console.log(username);
    const data = await User.findOneAndDelete({ username });
    res.json({ message: "deleted " });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default del;
