'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tasks,Categories}) {
      // define association here
      this.hasMany(Tasks, {foreignKey: "userId"})
      this.belongsToMany(Tasks, {through: 'PerformersToTasks',foreignKey:"userId"})
      this.belongsToMany(Categories, { through: 'UsersToCategories', foreignKey: 'userId' });

    }
  }
  Users.init({
    name: DataTypes.STRING,
    secondname: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    about: DataTypes.STRING,
    account: DataTypes.INTEGER,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
