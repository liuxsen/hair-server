'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'discounts',
      [
        {
          store_id: 1,
          discount_type: 1,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        },
        {
          store_id: 1,
          discount_type: 2,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        },
        {
          store_id: 1,
          discount_type: 3,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        },
        {
          store_id: 1,
          discount_type: 3,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        },
        {
          store_id: 2,
          discount_type: 1,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        },
        {
          store_id: 2,
          discount_type: 2,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        },
        {
          store_id: 2,
          discount_type: 3,
          full_price: 3000,
          subtract: 200,
          discount: 8,
          limit_time: new Date(),
          ...timestamps
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {}
};
