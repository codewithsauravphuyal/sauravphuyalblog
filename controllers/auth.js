import { db } from '../config/dbConfig.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user
export const register = async (req, res) => {
  try {
    // Check existing user
    const [existingUsers] = await db.query("SELECT * FROM users WHERE email = ? OR username = ?", [req.body.email, req.body.username]);

    if (existingUsers.length) {
      return res.status(409).json("User already exists!");
    }

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const values = [req.body.name, req.body.username, req.body.email, hash];
    await db.query("INSERT INTO users(`name`, `username`, `email`, `password`) VALUES (?)", [values]);

    return res.status(200).json("User has been created.");
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Login user
export const login = async (req, res) => {
  try {
    // Check user
    const [data] = await db.query("SELECT * FROM users WHERE username = ?", [req.body.username]);

    if (data.length === 0) {
      return res.status(404).json("User not found!");
    }

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Logout user
export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out.");
};
