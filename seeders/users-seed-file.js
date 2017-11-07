'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [
      {
        username: 'kevin',
        password: 'kevin',
        email: 'kevin@devleague.com',
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        username: 'chris',
        password: 'chris',
        email: 'chris@devleague.com',
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        username: 'virgi',
        password: 'virgi',
        email: 'virgi@devleague.com',
        createdAt: new Date (),
        updatedAt: new Date ()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};

