import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const dburl = process.env.MONGO_URL;
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true ,family:4})
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => {
    console.error("Error Connecting to MongoDB", err);
  });

const app = express()
const port =4006
app.listen(port ,()=> console.log("Server Working"))
