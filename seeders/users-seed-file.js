'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [
      {
        username: 'jesse',
        password: 'teacher',
        email: 'jesse@devleague.com',
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        username: 'baseem',
        password: 'student',
        email: 'baseem@devleague.com',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        username: 'russell',
        password: 'manager',
        email: 'russell@devleague.com',
        createdAt: new Date (),
        updatedAt: new Date ()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};

