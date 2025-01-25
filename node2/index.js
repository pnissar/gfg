import express from "express";
import router from "./routs/rout.js";
const port = 3017;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.listen(port, () => console.log(`Server is working ${port}`));
