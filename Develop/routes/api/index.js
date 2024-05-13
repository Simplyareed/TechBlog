const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// Set up the routes
router.use("/users", userRoutes); // Routes for user
router.use("/posts", postRoutes); // Routes for post
router.use("/comments", commentRoutes); // Routes for comment


module.exports = router;