import dotenv from "dotenv";
import express from "express";
import router from "./rout/autrout.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
dotenv.config();
const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`Server is working ${port}`));
