'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 discounts 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TINYINT, DATE } = Sequelize;
    await queryInterface.createTable('discounts', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      store_id: INTEGER, // 关联的门店id
      discount_type: TINYINT, // 0 全部 1 满减 2 满折 3 限时折扣
      full_price: INTEGER, // 满多少钱
      subtract: INTEGER, // 减去的钱
      discount: TINYINT, // 折扣值
      limit_time: DATE, // 限时
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 discounts 表
  down: async queryInterface => {
    await queryInterface.dropTable('discounts');
  }
};
