'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('items', [
      {
        name: 'kevin',
        image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Fish/H-P/pufferfish-closeup.ngsversion.1427141760081.adapt.1900.1.jpg',
        body: 'This is a fish.',
        price: 34,
        category_id: 1,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        name: 'chris',
        image: 'http://www.ikea.com/PIAimages/0406160_PE569308_S5.JPG',
        body: 'This is a chair.',
        price: 14,
        category_id: 1,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        name: 'virgi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjiVcw4xjCpHrW5hI3fU1tCxb0Lu6azd5sUkrlwcncBoD-lNl',
        body: 'This is a car.',
        price: 134,
        category_id: 1,
        condition_id: 3,
        user_id: 2,
        status_id: 1,
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        name: 'chris',
        image: 'http://bit.ly/2AmZBhQ',
        body: 'Red Mickey Mouse Toaster..having a moving sale',
        price: 17,
        category_id: 2,
        condition_id: 1,
        user_id: 2,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        image: 'https://thd.co/2zH37Hl',
        body: 'Used Home Depot Juicer',
        price: 
        category_id: 2
        condition_id: 4
        user_id:
        status_id:
        createdAt:
        updatedAt:
      },
      {
        name:
        image:
        body:
        price:
        category_id:
        condition_id:
        user_id:
        status_id:
        createdAt:
        updatedAt:
      }

      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('items', null, {});

  }
};

