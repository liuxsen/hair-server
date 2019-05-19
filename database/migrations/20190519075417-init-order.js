'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 orders 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize;
    await queryInterface.createTable('orders', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      store_id: INTEGER, // 关联的门店id
      member_id: INTEGER, // 会员id
      pay_amount: INTEGER, // 支付金额
      discount_amount: INTEGER, // 优惠金额
      discount_id: INTEGER, // 参与优惠id
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 orders 表
  down: async queryInterface => {
    await queryInterface.dropTable('orders');
  }
};
