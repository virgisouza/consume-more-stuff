'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('items', [
      {
        name: 'kevin',
        image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Fish/H-P/pufferfish-closeup.ngsversion.1427141760081.adapt.1900.1.jpg',
        body: 'This is a fish.',
        price: 34
      },
      {
        name: 'chris',
        image: 'http://www.ikea.com/PIAimages/0406160_PE569308_S5.JPG',
        body: 'This is a chair.',
        price: 14
      },
      {
        name: 'virgi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjiVcw4xjCpHrW5hI3fU1tCxb0Lu6azd5sUkrlwcncBoD-lNl',
        body: 'This is a car.',
        price: 134
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('items', null, {});

  }
};
