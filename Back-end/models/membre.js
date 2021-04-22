'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  };
  Membre.init({
    name: {
      type: DataTypes.STRING,
      allowNul: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNul: false
    },
    role: {
      type: DataTypes.STRING,
      allowNul: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNul: false
    },
  },{
    sequelize,
    tableName: 'membres',
    modelName: 'Membre',
  });
  return Membre;
};