import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/TodoRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {console.log("Database Connected..")})


app.use(router)


app.listen(3001, () => {
    console.log("server is running")
});