'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          age: 23,
          email: 'wyliuxsen@163.com',
          pwd: '123456',
          is_admin: 1,
          phone: '15901241803',
          ...timestamps
        },
        {
          name: '张三',
          age: 21,
          email: 'wyliuxsen@163.com',
          pwd: '123456',
          is_admin: 0,
          phone: '18311036454',
          ...timestamps
        },
        {
          name: '李四',
          age: 22,
          email: 'wyliuxsen@163.com',
          pwd: '123456',
          is_admin: 0,
          phone: '15789909090',
          ...timestamps
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
