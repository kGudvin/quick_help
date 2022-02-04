'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    let arr = []
    for (let index = 0; index < 5; index++) {
      arr.push({
        title: faker.name.jobArea(),
        adress: faker.address.streetAddress(),
        time: faker.datatype.datetime(),
        date: faker.date.future(),
        price: (Math.random() * (10000 - 2000) + 2000),
        description: faker.name.jobDescriptor(),
        image: faker.image.business(),
        categorie: faker.name.jobType(),
        createdAt:new Date(),
        updatedAt:new Date()
        });
      
    }
    await queryInterface.bulkInsert('OrganizationsTasks', arr, {});
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
