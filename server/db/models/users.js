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
    static associate({ UserTasks }) {
      // define association here
      this.belongsToMany(UserTasks, { through: 'User-UserTasks', foreignKey: 'userId' });
      
    }
    static associate({Categories }) {
      // define association here
      this.belongsToMany(Categories, { through: 'Users-Categories', foreignKey: 'userId' });
      
    }
  }
  Users.init({
    name: DataTypes.STRING,
    secondname: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    about: DataTypes.STRING,
    account: DataTypes.INTEGER,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
