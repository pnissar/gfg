import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const getotp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    if (!process.env.SECURITY_KEY) {
      return res
        .status(500)
        .json({ error: "SECURITY_KEY is not set in environment variables" });
    }

    const token = jwt.sign({ phone, otp }, process.env.SECURITY_KEY, {
      expiresIn: "3hr",
    });

    res
      .status(200)
      .json({ message: "OTP sent successfully", phone, otp, token });
    console.log({ phone, otp, token });
  } catch (error) {
    console.error("Error in getotp:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getotp;
