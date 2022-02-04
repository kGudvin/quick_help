'use strict';

const { default: faker } = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    let arr = []
    for (let index = 0; index < 5; index++) {
      arr.push({
        title: faker.company.companyName(),
        workerName: faker.name.firstName(),
        workerSecondName: faker.name.lastName(),
        workerPatronymic: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneFormats().toString(),
        about: faker.lorem.sentence(),
        account: (Math.random() * (10000 - 2000) + 2000),
        image: faker.image.business(),
        rating: (Math.random() * (5 - 1) + 1),
        createdAt:new Date(),
        updatedAt:new Date()
        });
      
    }
    await queryInterface.bulkInsert('Organizations', arr, {});
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
