import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // path to your .env if index.js is in api/

mongoose.connect('mongodb+srv://admin:admin@cluster0.n0aapcz.mongodb.net/mern-estate-A?appName=Cluster0').then(() => {
     console.log("✅ MongoDB connected");
      })
   .catch((err) => console.error("MongoDB connection error:3000", err));

// mongoose
//   .connect(process.env.MONGOOSE_URL)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//   })
//   .catch((err) => console.error("MongoDB connection error:3000", err));

const app = express();
app.listen(3000, () => {
  console.log("server ia running at 3000");
});
