'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
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

  return User;
};
