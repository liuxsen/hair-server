'use strict';

module.exports = app => {
  const { STRING, INTEGER, TINYINT, DATE } = app.Sequelize;

  const Member = app.model.define('member', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    store_id: INTEGER, // 关联的门店id
    name: STRING(30),
    phone: STRING(30),
    sex: TINYINT,
    age: TINYINT,
    created_at: DATE,
    updated_at: DATE
  });

  Member.associate = function() {
    app.model.Member.belongsTo(app.model.Store, {
      as: 'store',
      foreignKey: 'store_id'
    });
  };

  return Member;
};
