const { createEvent, getAllEvents } = require("./event.controller");
const { addJob, getAllJobs } = require("./job.controller");
const {
  createPost,
  getPosts,
  toggleLikePost,
  getPostById,
  deletePost,
  getUsersPosts,
} = require("./post.controller");
const {
  newUser,
  loginUser,
  getAllUsers,
  addFriend,
  removeFriend,
  getUserById,
  updateUser,
  verifyUnverifyUser,
  deleteUser,
} = require("./user.controllers");

module.exports = {
  newUser,
  loginUser,
  createPost,
  getPosts,
  toggleLikePost,
  getAllUsers,
  getPostById,
  deletePost,
  addFriend,
  removeFriend,
  getUserById,
  updateUser,
  createEvent,
  getAllEvents,
  getUsersPosts,
  addJob,
  getAllJobs,
  verifyUnverifyUser,
  deleteUser
};
