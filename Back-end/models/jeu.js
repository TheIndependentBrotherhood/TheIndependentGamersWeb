'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jeu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  };
  Jeu.init({
    name: {
      type: DataTypes.STRING,
      allowNul: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNul: false
    },
    description: {
      type: DataTypes.STRING,
      allowNul: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNul: false
    },
  },{
    sequelize,
    tableName: 'jeux',
    modelName: 'Jeu',
  });
  return Jeu;
};