const express = require("express");

const router = express.Router();

const posts = ["Hello World"];

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "ok",
    data: posts,
  });
});

module.exports = router;
