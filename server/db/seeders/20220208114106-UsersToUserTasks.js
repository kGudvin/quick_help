'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    //  * Add seed commands here.
    //  *
      // Example:
      // await queryInterface.bulkInsert('People', [{
      //   name: 'John Doe',
      // isBetaMember: false
      // }], {});
      const arr = [{
        ownerId : 1,
        taskId : 1,
        performerId: null,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId : 2,
        taskId : 2,
        performerId: null,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId : 3,
        taskId : 3,
        performerId: null,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId : 4,
        taskId : 4,
        performerId: null,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId : 5,
        taskId : 5,
        performerId: null,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }]

      await queryInterface.bulkInsert('UsersToUserTasks', arr, {});

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
