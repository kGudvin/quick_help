'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [{
      title:"Курьерские услуги",
      value:"Курьерские услуги",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Ремонт и строительство",
      value:"Ремонт и строительство",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Грузоперевозки",
      value:"Грузоперевозки",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Уборка помещения",
      value:"Уборка помещения",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"Компьютерная помощь",
      value:"Компьютерная помощь",
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
