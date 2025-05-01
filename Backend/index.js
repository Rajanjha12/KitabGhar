import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors from 'cors';
import userRoute from './route/user.route.js';

const app = express();

// Load environment variables from .env file
dotenv.config();

// CORS setup for specific domains
app.use(cors({
  origin: ['https://kitab-ghar-6odf.vercel.app', 'https://kitab-ghar-5aef.vercel.app'], // Add the correct URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// JSON middleware for parsing incoming requests with JSON payloads
app.use(express.json());

// MongoDB URI and PORT setup
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit if the MongoDB connection fails
  }
};

// Connect to MongoDB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Book Store API");
});

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
