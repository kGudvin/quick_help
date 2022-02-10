'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AcceptedTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AcceptedTasks.init({
    ownerId: DataTypes.INTEGER,
    performerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categorie: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AcceptedTasks',
  });
  return AcceptedTasks;
};