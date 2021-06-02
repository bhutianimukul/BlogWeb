const express = require("express");
const app = express.Router();
function composeBlog(posts) {
  app.get("/compose", function (req, res) {
    res.render("compose");
  });
  app.post("/compose", function (req, res) {
    const post = {
      title: req.body.titleText,
      post: req.body.postText,
    };
    posts.push(post);

    res.redirect("/");
  });
}
module.exports = app;
