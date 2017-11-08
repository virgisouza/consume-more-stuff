'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('statuses', [
      {
        type: 'Published'
      },
      {
        type: 'Sold'
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('statuses', null, {});

  }
};

