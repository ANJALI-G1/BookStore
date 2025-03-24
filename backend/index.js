import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from 'cors'
const app=express()
dotenv.config();
app.use(cors());
app.use(express.json())
// console.log(process.env)
const PORT=process.env.PORT||4000
const URI=process.env.MongoDBURI;

const connectDB = async () => {
  try {
      await mongoose.connect(URI);
      console.log("Connected to MongoDB");
  } catch (error) {
      console.log("MongoDB Connection Error:", error);
      process.exit(1);
  }
};
connectDB();


app.use("/book",bookRoute)
app.use('/user',userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})