'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrganizationsTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Organization}) {
      this.belongsToMany(Organization, { through: 'Organ-OrganTasks', foreignKey: 'taskId' });
    }
  }
  OrganizationsTasks.init({
    title: DataTypes.STRING,
    adress: DataTypes.STRING,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categorie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrganizationsTasks',
  });
  return OrganizationsTasks;
};
