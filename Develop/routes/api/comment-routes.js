const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {    
    // Create a new comment 
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Send a response with data
    res.status(200).json(newComment);
  } catch (err) {
    // Send an error response if something went wrong
    res.status(400).json(err);
  }
});

module.exports = router;