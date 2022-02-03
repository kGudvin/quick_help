'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({OrganizationsTasks}) {
      this.belongsToMany(OrganizationsTasks, { through: 'Organ-OrganTasks', foreignKey: 'organizationId' });
    }
  }
  Organization.init({
    title: DataTypes.STRING,
    workerName: DataTypes.STRING,
    workerSecondName: DataTypes.STRING,
    workerPatronymic: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    about: DataTypes.STRING,
    account: DataTypes.INTEGER,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};
