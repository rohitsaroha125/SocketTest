const express = require("express");
const io = require("../socket");

const router = express.Router();

const posts = ["Hello World"];

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "ok",
    data: posts,
  });
});

router.post("/", (req, res, next) => {
  const title = req.body.title;
  posts.push(title);
  io.getIO().emit("posts", posts);
  res.status(200).json({
    status: "ok",
    data: posts,
  });
});

module.exports = router;
