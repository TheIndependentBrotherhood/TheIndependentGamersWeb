'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Post}) {
      // define association here
      //userId
      this.belongsTo(User, { foreignKey : 'userId' })
      this.belongsTo(Post, { foreignKey : 'postId' })
    }
  };
  Message.init({
    content: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'messages',
    modelName: 'Message',
  });
  return Message;
};