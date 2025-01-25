import bcrypt from "bcrypt";
import { users } from "../data/data.js";
import jwt from "jsonwebtoken";
export const grabData = async (req, res) => {
  const { name, id, password } = req.body;

  // Validate input
  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  try {
    // Generate a hash (optional demonstration)
    const passwords = password;
    const hashedExample = await bcrypt.hash(passwords.toString(), 10);
    console.log("Hashed example password:", hashedExample);
    console.log(passwords.toString())
    let data;
    for (let item of users) {
      const ismatch = await bcrypt.compare((item.password), hashedExample);
      if (ismatch) {
        data = item;
      }
    }
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    

    // Generate a token (optional)
    const token = jwt.sign({ id: data.id, name: data.name }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // Respond with user data and token
    return res.json({ message: "Login successful", token, data });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// const { id } = req.params
// console.log(id)
// const d = users.find(item => item.id == id)
// d.name = name
// d.password = password
// const data=users.filter(item=>item.id!=id)
