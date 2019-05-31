'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
};

// 初始化门店数据
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'stores',
      [
        {
          name: '门店1',
          owner_id: 2,
          desc: '123',
          addr: '山西省',
          imgs: '',
          ...timestamps
        },
        {
          name: '门店2',
          owner_id: 2,
          desc: '123',
          addr: '山西省',
          imgs: '',
          ...timestamps
        },
        {
          name: '门店3',
          owner_id: 2,
          desc: '123',
          addr: '山西省',
          imgs: '',
          ...timestamps
        },
        {
          name: '门店4',
          owner_id: 2,
          desc: '123',
          addr: '山西省',
          imgs: '',
          ...timestamps
        },
        {
          name: '门店5',
          owner_id: 2,
          desc: '123',
          addr: '山西省',
          imgs: '',
          ...timestamps
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {}
};
