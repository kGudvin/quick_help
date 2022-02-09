'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PerformersToTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PerformersToTasks.init({
    userId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PerformersToTasks',
  });
  return PerformersToTasks;
};