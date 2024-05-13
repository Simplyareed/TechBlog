const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcryptjs');

class User extends Model {
  checkPassword(loginPw) {
    return bcryptjs.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,  // must be an INTEGER
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,  // must be an string
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,  // must be an string
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,  // must be an string
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {  // brings in hooks for beforeCreate and beforeUpate
      async beforeCreate(newUser) {
        newUser.password = await bcryptjs.hash(newUser.password, 10);
        return newUser;
      },
      async beforeUpdate(updatedUser) {
        updatedUser.password = await bcryptjs.hash(updatedUser.password, 10);
        return updatedUser;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;