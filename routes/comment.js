import express from 'express';
import {
  addComment,
  getComments,
  addReply,
  deleteComment,
  updateComment
} from '../controllers/commentController.js'; // Importing functions

const router = express.Router();

// Routes
router.post('/', addComment); // Endpoint to add a comment
router.get('/:postId', getComments); // Endpoint to get comments for a post
router.post('/reply', addReply); // Endpoint to add a reply to a comment
router.delete('/:commentId', deleteComment); // Endpoint to delete a comment
router.put('/:id', updateComment); // Endpoint to update a comment

export default router; // Exporting router as default
