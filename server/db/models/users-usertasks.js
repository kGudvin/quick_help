'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersToUserTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersToUserTasks.init({
    ownerId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
    performerId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN 
  }, {
    sequelize,
    modelName: 'UsersToUserTasks',
  });
  return UsersToUserTasks;
};
