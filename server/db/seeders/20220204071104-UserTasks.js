'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {

  async up (queryInterface, Sequelize) {
    let arr = []
    let date = new Date()
    const time = 5
    const adressArr = ['Москва, улица Орджоникидзе, 11с10 ','Москва, Яузская улица, 11/6к4','Москва, 1-й Земельный переулок, 1','Москва, Октябрьская улица, 91к1 ','Москва, ул. Льва Толстого, 16']
    for (let index = 0; index < 5; index++) {
      arr.push({
        title: faker.name.jobArea(),
        address: adressArr[index],
        time: (time+index).toString(),
        date: `${date.getDate()} . ${date.getMonth()}. ${date.getFullYear()}`,
        price: (Math.random() * (10000 - 2000) + 2000),
        description: faker.name.jobDescriptor(),
        image: faker.image.business(),
        categorie: faker.name.jobType(),
        createdAt:new Date(),
        updatedAt:new Date()
        });
      
    }
    await queryInterface.bulkInsert('UsersTasks', arr, {});
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
