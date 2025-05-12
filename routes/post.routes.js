const express = require('express');
const { createPost, getPosts, toggleLikePost, getPostById, deletePost, getUsersPosts } = require('../controllers');
const postRouter = express.Router();

postRouter.post("/", createPost)
postRouter.get("/all", getPosts)
postRouter.post("/toggle/like/:postId", toggleLikePost)
postRouter.get("/:id", getPostById)
postRouter.delete("/:id", deletePost)
postRouter.get("/user/:userId", getUsersPosts)

module.exports = postRouter;