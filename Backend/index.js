import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'

const app = express();
app.use(cors());
//use json middleware for parsing json data
app.use(express.json());
dotenv.config();
const PORT =  process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
 
//connect to MongoDB
 try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected')
 } catch(error){
    console.log('MongoDB connection error:', error);
 }
 //difining routes
 app.use("/book",bookRoute);
    app.use("/user",userRoute); 

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})