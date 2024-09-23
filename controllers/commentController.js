import { db } from "../config/dbConfig.js";

// Add a new comment or reply
export const addComment = async (req, res) => {
    const { post_id, name, email, website, comment, parent_id } = req.body;
    const query = `INSERT INTO comments (post_id, name, email, website, comment, parent_id, date) VALUES (?, ?, ?, ?, ?, ?, NOW())`;
    
    try {
        await db.query(query, [post_id, name, email, website, comment, parent_id]);
        res.status(201).json({ message: "Comment added successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to add comment", error: err });
    }
};

// Get all comments for a post
export const getComments = async (req, res) => {
    const { postId } = req.params;
    const query = `SELECT * FROM comments WHERE post_id = ? ORDER BY date ASC`;
    
    try {
        const [result] = await db.query(query, [postId]);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch comments", error: err });
    }
};

// Add a reply to a comment
export const addReply = async (req, res) => {
    const { commentId, reply } = req.body;
    const query = `INSERT INTO comments (parent_id, comment, date) VALUES (?, ?, NOW())`;
    
    try {
        await db.query(query, [commentId, reply]);
        res.status(201).json({ message: "Reply added successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to add reply", error: err });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const query = `DELETE FROM comments WHERE id = ?`;

    try {
        const result = await db.query(query, [commentId]);
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete comment", error: err });
    }
};

// Update a comment
export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { name, email, website, comment } = req.body;
    
    const query = `UPDATE comments SET name = ?, email = ?, website = ?, comment = ? WHERE id = ?`;

    try {
        const result = await db.query(query, [name, email, website, comment, id]);
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to update comment", error: err });
    }
};
