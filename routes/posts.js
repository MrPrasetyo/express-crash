import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controller/postController.js"
const router = express.Router();


// get all posts
router.get("/", getPosts);

// get single posts
router.get("/:id", getPost);

//   create new post
router.post("/", createPost);

// Update Post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
