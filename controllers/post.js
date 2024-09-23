import { db } from "../config/dbConfig.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  console.log("Request received for posts with category:", req.query.cat);
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  try {
    const [data] = await db.query(q, [req.query.cat]);
    console.log("Fetched posts:", data);
    return res.status(200).json(data);
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).send(err);
  }
};

export const getPost = async (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?";

  try {
    const [data] = await db.query(q, [req.params.id]);
    return res.status(200).json(data[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const addPost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    try {
      await db.query(q, [values]);
      return res.json("Post has been created.");
    } catch (err) {
      console.error("Database error:", err);
      return res.status(500).json(err);
    }
  });
};

export const deletePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    try {
      const result = await db.query(q, [postId, userInfo.id]);
      if (result[0].affectedRows === 0) {
        return res.status(403).json("You can delete only your post!");
      }

      return res.json("Post has been deleted!");
    } catch (err) {
      return res.status(500).json(err);
    }
  });
};

export const updatePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;

    // Check if the user owns the post before allowing the update
    const checkOwnershipQuery = "SELECT * FROM posts WHERE id = ? AND uid = ?";
    try {
      const [data] = await db.query(checkOwnershipQuery, [postId, userInfo.id]);
      if (data.length === 0) {
        return res.status(403).json("You can update only your posts!");
      }

      // If the user is the owner, proceed with the update
      const updateQuery = "UPDATE posts SET `title` = ?, `desc` = ?, `cat` = ?, `img` = ? WHERE id = ?";
      const values = [
        req.body.title,
        req.body.desc,
        req.body.cat,
        req.body.img,
        postId
      ];

      await db.query(updateQuery, values);
      return res.status(200).json("Post has been updated.");
    } catch (err) {
      console.error("Database error:", err);
      return res.status(500).json("Failed to update the post.");
    }
  });
};

// Fetch comments for a specific post
export const getComments = async (req, res) => {
  const postId = req.params.id;
  const q = "SELECT * FROM comments WHERE post_id = ? ORDER BY date DESC";

  try {
    const [data] = await db.query(q, [postId]);
    return res.status(200).json(data);
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).send(err);
  }
};
