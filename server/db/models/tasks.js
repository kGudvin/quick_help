'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, {foreignKey: 'userId'})
      this.belongsToMany(Users, {through: 'PerformersToTasks', foreignKey:"taskId"})
    }
  }
  Tasks.init({
    userId:DataTypes.INTEGER,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categorie: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};
