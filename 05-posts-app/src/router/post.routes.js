const express = require("express");
const { getAllPosts, createPost } = require("../controller/post.controller");

const PostRouter = express.Router();

PostRouter.route("/")          // http://localhost:9090/posts
    .get(getAllPosts)
    .post(createPost)

PostRouter.route("/:postId")
    .get()
    .patch()
    .delete()

module.exports = PostRouter;