'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [
      {
        name: 'vehicles'
      },
      {
        name: 'appliances'
      },
      {
        name: 'computers'
      },
      {
        name: 'furniture'
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categories', null, {});

  }
};

