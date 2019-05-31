'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
};
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'members',
      [
        {
          store_id: 1,
          name: '小明',
          phone: '15901234567',
          sex: 1,
          age: 23,
          ...timestamps
        },
        {
          store_id: 2,
          name: '小红',
          phone: '15901234567',
          sex: 0,
          age: 23,
          ...timestamps
        },
        {
          store_id: 3,
          name: '小刘',
          phone: '15901234567',
          sex: 0,
          age: 23,
          ...timestamps
        },
        {
          store_id: 4,
          name: '小百',
          phone: '15901234567',
          sex: 0,
          age: 23,
          ...timestamps
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {}
};
