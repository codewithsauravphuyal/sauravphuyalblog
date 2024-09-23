import express from 'express';
import {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
} from '../controllers/post.js';

const router = express.Router();

// Fetch all posts
router.get("/", getPosts);

// Fetch a single post by ID
router.get("/:id", getPost);

// Add a new post
router.post("/", addPost);

// Delete a post by ID
router.delete("/:id", deletePost);

// Update post by ID
router.put("/:id", updatePost);

export default router;
