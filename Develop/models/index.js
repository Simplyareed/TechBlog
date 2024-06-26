const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
// Define the relationships between the models
User.hasMany(Post, {
  foreignKey: "user_id", // Set's up the foreign key relationship for the following code below lines 6-27
});

Post.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(Post, {
  foreignKey: "post_id", 
});

Post.hasMany(Comment, {
  foreignKey: "post_id", 
});

User.hasMany(Comment, {
  foreignKey: "user_id", 
});
// Export the models
module.exports = { User, Post, Comment };