'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organ - OrganTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organ - OrganTasks.init({
    organizationId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Organ-OrganTasks',
  });
  return Organ - OrganTasks;
};