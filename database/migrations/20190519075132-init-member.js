'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 members 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TINYINT, DATE, STRING } = Sequelize;
    await queryInterface.createTable('members', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      store_id: INTEGER, // 关联的门店id
      name: STRING(30),
      phone: STRING(30),
      sex: TINYINT,
      age: TINYINT,
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 members 表
  down: async queryInterface => {
    await queryInterface.dropTable('members');
  }
};
