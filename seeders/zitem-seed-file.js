'use strict';
const moment = require('moment');
const momentRandom = require('moment-random');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('items', [
      {
        name: 'kevin',
        file: 'http://bit.ly/2lbmGBb',
        body: 'This is a fish.',
        price: 34,
        category_id: 1,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date ()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2hoE7gq',
        body: 'This is a chair.',
        price: 14,
        category_id: 1,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date ()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2zLBIEg',
        body: 'This is a car.',
        price: 134,
        category_id: 1,
        condition_id: 3,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date ()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2AmZBhQ',
        body: 'Red Mickey Mouse Toaster..having a moving sale',
        price: 17,
        category_id: 2,
        condition_id: 1,
        user_id: 2,
        status_id: 1,
        createdAt:moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'https://thd.co/2zH37Hl',
        body: 'Used Home Depot Juicer',
        price: 199,
        category_id: 2,
        condition_id: 4,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2heV09G',
        body: 'Must-have mini fridge for the office!',
        price: 59,
        category_id: 2,
        condition_id: 1,
        user_id: 3,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2zIrODB',
        body: 'Keurig coffee maker, perfect for work',
        price: 39,
        category_id: 2,
        condition_id: 1,
        user_id: 3,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2zp0v0e',
        body: 'Blue ladybug childrens kitchen appliance, 2 months used',
        price: 19,
        category_id: 2,
        condition_id: 2,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2hlaDQK',
        body: 'Dell All-In-One computer',
        price: 1099,
        category_id: 3,
        condition_id: 1,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2zuQQD0',
        body: 'Desktop computer for gaming, great deal',
        price: 899,
        category_id: 3,
        condition_id: 2,
        user_id: 3,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2An9ps9',
        body: 'Custom built computer for coding, selling cheap',
        price: 599,
        category_id: 3,
        condition_id: 2,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2m5Zbu0',
        body: 'Timeless antique, IBM first personal computer',
        price: 15499,
        category_id: 3,
        condition_id: 4,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2m57iXv',
        body: 'Razer Nostromo Gaming Keyboard, near mint',
        price: 99,
        category_id: 3,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2hgpeJu',
        body: 'Oreo ice-cream sandwich couch! never used',
        price: 499,
        category_id: 4,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2yjqEda',
        body: 'Red Pac-Man cool couch, going fast.',
        price: 599,
        category_id: 4,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2yjqEda',
        body: 'Red Pac-Man cool couch, going fast.',
        price: 599,
        category_id: 4,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2jcGUtQ',
        body: 'A paint drip table. Innovative, and fresh.',
        price: 299,
        category_id: 4,
        condition_id: 1,
        user_id: 2,
        status_id: 2,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2zHR2BF',
        body: 'Cool furniture dresser, somewhat worn.',
        price: 399,
        category_id: 4,
        condition_id: 3,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2zoaanQ',
        body: 'A shoe car. Only ten manufactured worldwide. 15k miles.',
        price: 23399,
        category_id: 1,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2yJdlHj',
        body: 'Rosie, my used Pink Corolla with eyelashes. Fair condition.',
        price: 8399,
        category_id: 1,
        condition_id: 3,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2znCDdr',
        body: 'A red telephone car, custom built by my family.',
        price: 5399,
        category_id: 1,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2AmM49N',
        body: 'Glass toaster, able to eject toast at crazy speeds.',
        price: 79,
        category_id: 2,
        condition_id: 1,
        user_id: 3,
        status_id: 2,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2hlWfaV',
        body: 'Unused, fish-shaped cleaning appliance for kitchen.',
        price: 9,
        category_id: 2,
        condition_id: 2,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2jc987O',
        body: 'Custom PC-rig, in a neon pyramid. Crazy bargain.',
        price: 1199,
        category_id: 3,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2hf89Qa',
        body: 'Moving away. Selling my triple monitor setup!',
        price: 899,
        category_id: 3,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2jbfZPa',
        body: 'Overkill on the fans desk setup. Need to get rid of it!',
        price: 999,
        category_id: 3,
        condition_id: 2,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2zuYa3F',
        body: 'Book storing furniture, crazy space saving.',
        price: 799,
        category_id: 4,
        condition_id: 1,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2hVmIsX',
        body: 'Checkmark innovative furniture, mint.',
        price: 999,
        category_id: 4,
        condition_id: 1,
        user_id: 3,
        status_id: 2,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2hVpfn0',
        body: 'Artfully designed used car. Fair condition, 59k miles.',
        price: 13999,
        category_id: 1,
        condition_id: 3,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2hnuJtN',
        body: 'Energy efficient vehicle, one out of these five.',
        price: 12999,
        category_id: 1,
        condition_id: 1,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2zv5oEV',
        body: 'General Motors wheelchair vehicle.',
        price: 7999,
        category_id: 1,
        condition_id: 2,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2ztpTjc',
        body: 'Bowling Pin blender, works perfectly.',
        price: 99,
        category_id: 2,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2ykeu3M',
        body: 'Creative and functional blender.',
        price: 199,
        category_id: 2,
        condition_id: 3,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2jeuC3Z',
        body: 'Breakfast Sandwich Maker, incredibly efficient and useful.',
        price: 29,
        category_id: 2,
        condition_id: 1,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2hex3iP',
        body: 'Selling custom gaming rig.',
        price: 1000,
        category_id: 3,
        condition_id: 2,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2hUo4Er',
        body: 'Selling my MacBook, used 3 months. Mint condition.',
        price: 1299,
        category_id: 3,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2hmEDvG',
        body: 'Staircase furniture for sale!',
        price: 2299,
        category_id: 4,
        condition_id: 2,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'virgi',
        file: 'http://bit.ly/2zGzmGO',
        body: 'Furniture tile with cool colors..',
        price: 299,
        category_id: 4,
        condition_id: 3,
        user_id: 2,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'chris',
        file: 'http://bit.ly/2ztdG03',
        body: 'Mirror wood furniture that resembles a magnifying glass.',
        price: 599,
        category_id: 4,
        condition_id: 1,
        user_id: 1,
        status_id: 1,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      },
      {
        name: 'kevin',
        file: 'http://bit.ly/2hf0Ac8',
        body: 'Selling my really cool motorcycle.',
        price: 15599,
        category_id: 4,
        condition_id: 2,
        user_id: 2,
        status_id: 2,
        createdAt: moment(momentRandom()).format('MMM DD, YYYY'),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('items', null, {});

  }
};

