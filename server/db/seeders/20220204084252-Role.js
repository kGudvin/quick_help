'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Roles', [
      {role: 'User', createdAt: new Date(), updatedAt: new Date()},
      {role: 'Admin', createdAt: new Date(), updatedAt: new Date()}
    ], {});

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
