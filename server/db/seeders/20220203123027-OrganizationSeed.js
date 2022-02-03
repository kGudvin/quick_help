'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [{
      title:"КАТЕГОРИЯ 1",
      value:"категория 1",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"КАТЕГОРИЯ 1",
      value:"категория 1",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"КАТЕГОРИЯ 2",
      value:"категория 2",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"КАТЕГОРИЯ 3",
      value:"категория 3",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      title:"КАТЕГОРИЯ 4",
      value:"категория 4",
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
