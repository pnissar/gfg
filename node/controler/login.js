import jwt from "jsonwebtoken";
import { users } from "../data/data.js";
import bcrypt from "bcrypt";
export const login = async (req, res) => {
  const token = req.header["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token Not Found" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "unauthorized" });
    }
    res
      .status(200)
      .json({
        id: decoded.id,
        name: decoded.name,
        message: "verified successfully",
        status: 200,
      });
  });
};
