'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    phone: STRING(30),
    is_admin: INTEGER,
    created_at: DATE,
    updated_at: DATE
  });

  return User;
};
