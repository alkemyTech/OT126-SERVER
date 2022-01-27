'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        noveltyId: 1,
        userId: '1',
        body: 'seed test comments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        noveltyId: 2,
        userId: 2,
        body: 'seed test comments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        noveltyId: 3,
        userId: 3,
        body: 'seed test comments',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
