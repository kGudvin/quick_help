'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: faker.name.firstName(),
      secondname: faker.name.lastName(),
      patronymic: faker.name.lastName(),
      email: faker.internet.email(),
      age: (Math.random() * (80 - 18) + 18),
      about: faker.lorem.sentence(),
      account: (Math.random() * (10000 - 2000) + 2000),
      image:'',
      rating: 5,
      phone: "111111111",
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
