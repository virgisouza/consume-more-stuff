'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('items', [
      {
        name: 'Red Toaster',
        file: 'http://bit.ly/2AmZBhQ',
        body: 'Moving Sale! A cute Mickey Mouse Toaster.',
        price: 17,
        category: 'appliances',
        condition: 'new',
        status: 'unsold',
        posted_by: 2
      },
      {
        name: 'Juicer',
        file: 'https://thd.co/2zH37Hl',
        body: 'Need to sell my used Home Depot Juicer',
        price: 199,
        category: 'appliances',
        condition: 'good',
        status: 'unsold',
        posted_by: 2
      },
      {
        name: 'Mini-Fridge',
        file: 'http://bit.ly/2heV09G',
        body: 'A must-have for the office!',
        price: 59,
        category: 'appliances',
        condition: 'good',
        status: 'unsold',
        posted_by: 3
      },
      {
        name: 'Coffee Maker',
        file: 'http://bit.ly/2zIrODB',
        body: 'Keurig coffee maker, works perfectly.',
        price: 39,
        category: 'appliances',
        condition: 'fair',
        status: 'unsold',
        posted_by: 3
      },
      {
        name: 'LadyBug Appliance',
        file: 'http://bit.ly/2zp0v0e',
        body: 'A blue kitchen appliance for children, 2 months used',
        price: 19,
        category: 'appliances',
        condition: 'used',
        status: 'sold',
        posted_by: 1
      }
      
  ]), {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('items', null, {});

  }
};

