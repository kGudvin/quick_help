'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    let arr = []
    for (let index = 0; index < 5; index++) {
      arr.push({
        name: faker.name.firstName(),
        secondname: faker.name.lastName(),
        patronymic: faker.name.lastName(),
        email: faker.internet.email(),
        age: (Math.random() * (80 - 18) + 18),
        about: faker.lorem.sentence(),
        account: (Math.random() * (10000 - 2000) + 2000),
        image: faker.image.avatar(),
        rating: 5,
        phone: faker.phone.phoneFormats().toString(),
        role_id: 1,
        password:'1',
        createdAt:new Date(),
        updatedAt:new Date()
        });
      
    }
    await queryInterface.bulkInsert('Users', arr, {});
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
