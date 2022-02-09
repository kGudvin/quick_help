'use strict';
const { faker } = require('@faker-js/faker');


module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [{
      title:"Курьерские услуги",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Ремонт и строительство",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Грузоперевозки",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Уборка помещения",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Компьютерная помощь",
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
