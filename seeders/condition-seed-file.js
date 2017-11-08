'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('conditions', [
      {
        type: 'new'
      },
      {
        type: 'good'
      },
      {
        type: 'fair'
      },
      {
        type: 'worn'
      },
      {
        type: 'used'
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('conditions', null, {});

  }
};

