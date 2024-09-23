import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from 'fs';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from './routes/comment.js';
import certificateRoutes from './routes/certificates.js'; 
import testimonialRoutes from './routes/testimonials.js';
import teamRoutes from './routes/teams.js';

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Use environment variable for flexibility
  credentials: true
}));

app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// Route handling
app.use("/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/teams', teamRoutes);

// Ensure upload directory exists
if (!fs.existsSync('public/upload')) {
  fs.mkdirSync('public/upload', { recursive: true });
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Filename with timestamp
  },
});

const upload = multer({ storage });

// Endpoint to handle file uploads
app.post("/api/upload", upload.single("file"), function (req, res) { 
  const file = req.file; // Get uploaded file information
  res.status(200).json(file.filename); // Respond with the filename
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(8800, () => {
  console.log("Server running on port 8800!");
});
