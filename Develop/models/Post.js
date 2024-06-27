const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/connection");

class Post extends Model {}

Post.init(  // array of requirements for the post
  {
    id: {
      type: DataTypes.INTEGER, // must be an INTEGER
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,  // must be an string
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT, // must be an text
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER, // must be an INTEGER
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;