'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 stores 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('stores', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      owner_id: INTEGER, // 店长id
      desc: STRING(100), // 店铺描述
      addr: STRING(100), // 店铺地址
      imgs: STRING(100), // 店铺图片详情逗号隔开，数组
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 stores 表
  down: async queryInterface => {
    await queryInterface.dropTable('stores');
  }
};
