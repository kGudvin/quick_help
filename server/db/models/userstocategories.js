'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersToCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersToCategories.init({
    userId: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersToCategories',
  });
  return UsersToCategories;
};