'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER, // 年龄
      email: STRING(30), // 邮箱
      pwd: STRING(100), // 密码
      phone: STRING(30), // 手机
      is_admin: INTEGER, // 是否是管理员
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
