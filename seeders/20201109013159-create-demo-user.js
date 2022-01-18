'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Standard',
      lastName: 'Test User',
      email: 'standard-test-user@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', //TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: 'Test User',
      email: 'admin-test-user@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', //TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
