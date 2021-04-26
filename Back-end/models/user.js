'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId'})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Un Utilisateur doit avoir un nom'},
        notEmpty: { msg: 'Le Nom ne peut pas être vide'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Un Utilisateur doit avoir un email'},
        notEmpty: { msg: 'L\'email ne peut pas être vide'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Un Utilisateur doit avoir un password'},
        notEmpty: { msg: 'Le password ne peut pas être vide'}
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNul: false
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};