import jwt from "jsonwebtoken"; // Correct default import for jsonwebtoken

const verotp = async (req, res) => {
  try {
    const { otp } = req.query; 
    console.log(otp);
    const token = req.headers["authorization"]?.split(" ")[1];
 
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const decoded = jwt.verify(token, process.env.SECURITY_KEY); 
    if (decoded.otp == otp) {
      res.status(200).json({ message: "OTP verification successful" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error.message);

    
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(400).json({ message: "Invalid token" });
    }

    // Generic error handling
    res.status(500).json({ message: "Internal server error" });
  }
};

export default verotp;
