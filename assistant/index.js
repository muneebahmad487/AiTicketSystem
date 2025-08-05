import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const mongoURI = process.env.MONGO_URL;
console.log(mongoURI);
app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
})